import React from "react";
import { FlatList, View } from "react-native";
import RepositoryItem from "./RepositroyItem";
import { useStyles } from "../styles/styles";
import useRepositories from "../hooks/useRepositories";

const ItemSeparator = () => {
	const { cardSeparator } = useStyles();
	return <View style={cardSeparator} />;
};

const RepositoryList = () => {
	const styles = useStyles();
	const { repositories } = useRepositories(); // custom hook for fetching data

	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			// other props
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<RepositoryItem {...item} style={styles.cardContainer} />
			)}
		/>
	);
};

export default RepositoryList;
