import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import CardStats from "./CardStats";
import CardBio from "./CardBio";
import { useLazyQuery } from "@apollo/client";
import { GET_INDIVIDUAL_REPOSITORY } from "../../graphql/queries";
import * as Linking from "expo-linking";
import Text from "../Text";
import { useStyles } from "../../styles/styles";
import { useParams } from "react-router-native";

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
	showLink,
}) {
	const [getRepoGithub, { data: data, loading }] = useLazyQuery(
		GET_INDIVIDUAL_REPOSITORY
	);

	const styles = useStyles();
	const id = useParams().id;

	useEffect(() => {
		let isMounted = true; // we use it to prevent memory leaks from happening
		if (showLink && id && isMounted) {
			getRepoGithub({ variables: { id } });
		}
		return () => {
			isMounted = false;
		};
	}, [id]);

	if (loading) {
		return <Text>loading....</Text>;
	}

	const stats = {
		Stars: stargazersCount ?? data?.repository.stargazersCount,
		Forks: forksCount ?? data?.repository.forksCount,
		Review: reviewCount ?? data?.repository.reviewCount,
		Rating: ratingAverage ?? data?.repository.ratingAverage,
	};

	const bio = {
		language: language ?? data?.repository.language,
		description: description ?? data?.repository.description,
		fullName: fullName ?? data?.repository.fullName,
		ownerAvatarUrl: ownerAvatarUrl ?? data?.repository.ownerAvatarUrl,
	};

	return (
		<View style={style} testID={testID}>
			<CardBio bio={bio} />
			<CardStats stats={stats} />
			{showLink ? (
				<Pressable onPress={() => Linking.openURL(data?.repository.url)}>
					<Text
						style={[styles.primaryContainer, { padding: 9, marginTop: 10 }]}
					>
						Open in GitHub
					</Text>
				</Pressable>
			) : null}
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
