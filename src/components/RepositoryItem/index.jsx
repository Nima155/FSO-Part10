import React from "react";
import { View, Pressable } from "react-native";
import Text from "../Text";
import CardStats from "./CardStats";
import CardBio from "./CardBio";
import * as Linking from "expo-linking";
import { useStyles } from "../../styles/styles";
import { ItemSeparator } from "../RepositoryList";
export default function RepositoryItem({
	style,
	stargazersCount,
	forksCount,
	reviewCount,
	ratingAverage,
	description,
	language,
	fullName,
	testID,
	ownerAvatarUrl,
	url,
	showLink,
}) {
	const styles = useStyles();
	const stats = {
		Stars: stargazersCount,
		Forks: forksCount,
		Review: reviewCount,
		Rating: ratingAverage,
	};

	const bio = {
		language: language,
		description: description,
		fullName: fullName,
		ownerAvatarUrl: ownerAvatarUrl,
	};

	return (
		<>
			<View style={style} testID={testID}>
				<CardBio bio={bio} />
				<CardStats stats={stats} />
				{showLink ? (
					<Pressable onPress={() => Linking.openURL(url)}>
						<Text
							style={[styles.primaryContainer, { padding: 9, marginTop: 10 }]}
						>
							Open in GitHub
						</Text>
					</Pressable>
				) : null}
			</View>
			{showLink && <ItemSeparator />}
		</>
	);
}
// id: "django.django",
// 		fullName: "django/django",
// 		description: "The Web framework for perfectionists with deadlines.",
// 		language: "Python",
// 		forksCount: 21015,
// 		stargazersCount: 48496,
// 		ratingAverage: 73,
// 		reviewCount: 5,
// 		ownerAvatarUrl:
