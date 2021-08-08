import React from "react";
import { View, Image } from "react-native";
import { useStyles } from "../../styles/styles";

import Text from "../Text";

export default function CardBio({ bio }) {
	const styles = useStyles();
	return (
		<View style={styles.cardBioContainer}>
			<Image source={{ uri: bio.ownerAvatarUrl }} style={styles.avatarImage} />

			<View style={styles.cardBioAboutContainer}>
				<Text fontWeight="bold" fontSize="subheading" style={styles.textBox}>
					{bio.fullName}
				</Text>

				<Text color="textSecondary" style={styles.textBox}>
					{bio.description}
				</Text>

				<Text
					style={[
						{ alignSelf: "flex-start" },
						styles.textBox,
						styles.primaryContainer,
					]}
				>
					{bio.language}
				</Text>
			</View>
		</View>
	);
}
