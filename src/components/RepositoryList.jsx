import React from "react";
import { FlatList, Pressable, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useStyles } from "../styles/styles";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";

const ItemSeparator = () => {
	const { cardSeparator } = useStyles();
	return <View style={cardSeparator} />;
};
export const RepositoryListContainer = ({ repositories }) => {
	const styles = useStyles();
	const history = useHistory();
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
				<Pressable onPress={() => history.push(item.id)}>
					<RepositoryItem
						testID="repoItem"
						{...item}
						style={styles.cardContainer}
					/>
				</Pressable>
			)}
		/>
	);
};
const RepositoryList = () => {
	const { repositories } = useRepositories(); // custom hook for fetching data

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
