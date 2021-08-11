// import { useQuery } from "@apollo/client";
import React from "react";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "./ReviewItem";
import { FlatList, View } from "react-native";
import Text from "../Text";

import { useParams } from "react-router";
import { useStyles } from "../../styles/styles";
// import { GET_INDIVIDUAL_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "../RepositoryItem";
import useReviews from "../../hooks/useReviews";

export default function SingleRepositoryItem() {
	const styles = useStyles();
	const id = useParams().id;

	const { data, loading, fetchReview } = useReviews({
		id,
		first: 4,
	});

	if (loading || !data?.repository) {
		return <Text>loading....</Text>;
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				onEndReached={fetchReview}
				onEndReachedThreshold={0.5}
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
