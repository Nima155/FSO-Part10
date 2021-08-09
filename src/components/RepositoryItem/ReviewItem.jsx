import React from "react";
import Text from "../Text";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { format } from "date-fns";
export default function ReviewItem({ review }) {
	const styles = useStyles();

	return (
		<View style={[styles.cardContainer, { flexDirection: "row" }]}>
			<View style={styles.reviewScoreContainer}>
				<Text color="primary">{review.node.rating}</Text>
			</View>
			<View style={styles.cardBioAboutContainer}>
				<Text
					fontWeight="bold"
					fontSize="subheading"
					style={styles.textBoxMedium}
				>
					{review.node.user.username}
				</Text>
				<Text color="textSecondary" style={styles.textBoxMedium}>
					{format(new Date(review.node.createdAt), "MM.dd.yyyy")}
				</Text>
				<Text style={styles.textBoxMedium}>{review.node.text}</Text>
			</View>
		</View>
	);
}
