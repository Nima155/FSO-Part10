import React from "react";
import { FlatList, View } from "react-native";
import RepositoryItem from "./RepositroyItem";
import { useStyles } from "../styles/styles";
import useRepositories from "../hooks/useRepositories";

const ItemSeparator = () => {
	const { cardSeparator } = useStyles();
	return <View style={cardSeparator} />;
};
export const RepositoryListContainer = ({ repositories }) => {
	const styles = useStyles();
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
				<RepositoryItem
					testID="repoItem"
					{...item}
					style={styles.cardContainer}
				/>
			)}
		/>
	);
};
const RepositoryList = () => {
	const { repositories } = useRepositories(); // custom hook for fetching data

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
