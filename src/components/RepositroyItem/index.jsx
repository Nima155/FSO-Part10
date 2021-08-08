import React from "react";
import { View } from "react-native";
import CardStats from "./CardStats";
import CardBio from "./CardBio";

// description: "Predictable state container for JavaScript apps",
// language: "TypeScript",
// forksCount: 13902,
// stargazersCount: 52869,
// ratingAverage: 0,
// reviewCount: 0,

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
}) {
	const stats = {
		Stars: stargazersCount,
		Forks: forksCount,
		Review: reviewCount,
		Rating: ratingAverage,
	};

	const bio = {
		language,
		description,
		fullName,
		ownerAvatarUrl,
	};

	return (
		<View style={style} testID={testID}>
			<CardBio bio={bio} />
			<CardStats stats={stats} />
		</View>
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
