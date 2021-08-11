import React, { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useStyles } from "../styles/styles";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";
import RepositorySortSelector from "./RepositorySortSelector";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce/lib";

export const ItemSeparator = () => {
	const { cardSeparator } = useStyles();
	return <View style={cardSeparator} />;
};

export const RepositoryListContainer = ({
	repositories,
	setSortCriteria,
	sortCriteria,
	searchText,
	setSearchText,
	fetcher,
}) => {
	const styles = useStyles();
	const history = useHistory();
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];
	return (
		<FlatList
			onEndReachedThreshold={0.5}
			onEndReached={fetcher}
			ListHeaderComponent={
				<View style={styles.searchAndSortContainer}>
					<Searchbar
						placeholder="Search"
						onChangeText={setSearchText}
						value={searchText}
					/>
					<RepositorySortSelector
						setSelectedSort={setSortCriteria}
						sortCriteria={sortCriteria}
					/>
				</View>
			}
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
	const [selectedSort, setSelectedSort] = useState("byDate");
	const [searchText, setSearchText] = useState("");
	const [text] = useDebounce(searchText, 500); // poll every 500 ms, to reduce CPU load...

	const { repositories, fetchMore } = useRepositories(
		["lowestRating", "highestRating"].includes(selectedSort)
			? "RATING_AVERAGE"
			: "CREATED_AT",
		selectedSort === "lowestRating" ? "ASC" : "DESC",
		text,
		4
	); // custom hook for fetching data

	return (
		<RepositoryListContainer
			fetcher={fetchMore}
			repositories={repositories}
			setSortCriteria={setSelectedSort}
			sortCriteria={selectedSort}
			setSearchText={(value) => setSearchText(value)}
		/>
	);
};

export default RepositoryList;
