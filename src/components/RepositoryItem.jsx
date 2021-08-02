import React from "react";
import { Text, View } from "react-native";
import { elementParser } from "../utils/helpers";
// description: "Predictable state container for JavaScript apps",
// language: "TypeScript",
// forksCount: 13902,
// stargazersCount: 52869,
// ratingAverage: 0,
// reviewCount: 0,

export default function RepositoryItem({ arr }) {
	return (
		<View>
			<Text>{arr.map(elementParser)}</Text>
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
