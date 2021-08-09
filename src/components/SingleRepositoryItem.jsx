import { useQuery } from "@apollo/client";
import React from "react";
import { ItemSeparator } from "./RepositoryList";
import ReviewItem from "./RepositoryItem/ReviewItem";
import { FlatList, View } from "react-native";
import Text from "./Text";

import { useParams } from "react-router";
import { useStyles } from "../styles/styles";
import { GET_INDIVIDUAL_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";

export default function SingleRepositoryItem() {
	const styles = useStyles();
	const id = useParams().id;

	const { data, loading } = useQuery(GET_INDIVIDUAL_REPOSITORY, {
		variables: { id },
		fetchPolicy: "cache-and-network",
	});

	if (loading) {
		return <Text>loading....</Text>;
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				ListHeaderComponent={() => (
					<RepositoryItem
						{...data.repository}
						style={styles.cardContainer}
						showLink
					/>
				)}
				ItemSeparatorComponent={ItemSeparator}
				data={data.repository.reviews.edges}
				keyExtractor={(item) => item.node.id}
				renderItem={({ item }) => <ReviewItem review={item} />}
			/>
		</View>
	);
}
