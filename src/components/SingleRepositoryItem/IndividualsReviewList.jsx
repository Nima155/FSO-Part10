import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors, Surface } from "react-native-paper";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import { useStyles } from "../../styles/styles";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "../ItemSeparator";
import Text from "../Text";
export default function IndividualsReviewList() {
	const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
		fetchPolicy: "cache-and-network",
		variables: {
			getReview: true,
		},
	});

	const styles = useStyles();

	if (loading) {
		return (
			<Surface style={[styles.container, styles.centeredContainer]}>
				<ActivityIndicator
					animating={true}
					color={Colors.green500}
					size="large"
				/>
			</Surface>
		);
	}

	if (!data.authorizedUser.reviews.edges.length) {
		return (
			<Surface style={[styles.container, styles.centeredContainer]}>
				<Text fontSize="subheading">You have not reviewed anything</Text>
			</Surface>
		);
	}

	return (
		<FlatList
			data={data.authorizedUser.reviews.edges}
			ItemSeparatorComponent={ItemSeparator}
			keyExtractor={(item) => item.node.repository.id}
			renderItem={({ item }) => <ReviewItem review={item} userMode={true} />}
		/>
	);
}
