import React from "react";
import Text from "../Text";
import { View, Alert } from "react-native";
import { useStyles } from "../../styles/styles";
import { format } from "date-fns";
import { Button, Colors } from "react-native-paper";
import { useHistory } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import produce from "immer";

function ReviewButtonGroup({ reviewId, repoId }) {
	const styles = useStyles();
	const history = useHistory();

	const [deleteFunc] = useMutation(DELETE_REVIEW, {
		update(cache) {
			const currentState = cache.readQuery({
				query: GET_AUTHORIZED_USER,
				variables: {
					getReview: true,
				},
			});

			cache.writeQuery({
				query: GET_AUTHORIZED_USER,
				variables: {
					getReview: true,
				},
				data: produce(currentState, (state) => {
					// updating the cache by utilizing immer
					state.authorizedUser.reviews.edges =
						state.authorizedUser.reviews.edges.filter(
							(e) => e.node.id !== reviewId
						);
				}),
			});
		},
	});

	const alert = () =>
		Alert.alert(
			"Delete review",
			"Are you sure you want to delete this review",
			[
				{
					text: "CANCEL",
					style: "cancel",
				},
				{
					text: "DELETE",
					onPress: () =>
						deleteFunc({
							variables: {
								id: reviewId,
							},
						}),
				},
			]
		);
	return (
		<View style={styles.rowContainer}>
			<Button
				uppercase={false}
				mode="contained"
				style={{ flex: 1, marginRight: 10 }}
				color={Colors.blue600}
				dark
				onPress={() => history.push(`/${repoId}`)}
			>
				View repository
			</Button>
			<Button
				uppercase={false}
				dark
				mode="contained"
				style={{ flex: 1 }}
				color={Colors.red500}
				onPress={alert}
			>
				Delete review
			</Button>
		</View>
	);
}

export default function ReviewItem({ review, userMode = false }) {
	const styles = useStyles();

	return (
		<View style={styles.cardContainer}>
			<View style={styles.rowContainer}>
				<View style={styles.reviewScoreContainer}>
					<Text color="primary">{review.node.rating}</Text>
				</View>
				<View style={styles.cardBioAboutContainer}>
					<Text
						fontWeight="bold"
						fontSize="subheading"
						style={styles.textBoxMedium}
					>
						{!userMode
							? review.node.user.username
							: review.node.repository.fullName}
					</Text>
					<Text color="textSecondary" style={styles.textBoxMedium}>
						{format(new Date(review.node.createdAt), "MM.dd.yyyy")}
					</Text>
					<Text style={styles.textBoxMedium}>{review.node.text}</Text>
				</View>
			</View>
			{userMode && (
				<ReviewButtonGroup
					repoId={review.node.repository.id}
					reviewId={review.node.id}
				/>
			)}
		</View>
	);
}
