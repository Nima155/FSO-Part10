import React from "react";
import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";
const styles = StyleSheet.create({
	imageStyle: {
		height: 50,
		width: 50,
		borderRadius: theme.borders.smoothSquare,
		marginRight: 10,
	},
	mainViewStyle: {
		flexGrow: 2,
		display: "flex",
		marginBottom: 10,
		flexDirection: "row",
	},
	secondaryViewStyle: {
		justifyContent: "space-evenly",

		flexShrink: 1,
	},
	languageBox: {
		backgroundColor: theme.colors.primary,
		color: "white",
		padding: 5,
		borderRadius: theme.borders.smoothSquare,
		textAlign: "center",
		alignSelf: "flex-start",
	},
	textStyle: {
		margin: theme.margins.small,
	},
});

export default function CardBio({ bio }) {
	return (
		<View style={styles.mainViewStyle}>
			<Image source={{ uri: bio.ownerAvatarUrl }} style={styles.imageStyle} />

			<View style={styles.secondaryViewStyle}>
				<Text fontWeight="bold" style={styles.textStyle}>
					{bio.fullName}
				</Text>

				<Text color="textSecondary" style={styles.textStyle}>
					{bio.description}
				</Text>

				<Text style={[styles.languageBox, styles.textStyle]}>
					{bio.language}
				</Text>
			</View>
		</View>
	);
}
