import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";
const useRepositories = (orderBy, orderDirection, searchKeyword, first) => {
	const { loading, data, fetchMore, refetch, ...result } = useQuery(
		GET_REPOSITORIES,
		{
			fetchPolicy: "cache-and-network",
			variables: {
				orderBy,
				orderDirection,
				searchKeyword,
				first, // get this number of entries
			},
		}
	);
	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore) {
			// if loading or no more, stop dont fetch
			return;
		}

		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor, // get all entries after this cursor
				orderBy,
				orderDirection,
				searchKeyword,
			},
		});
	};

	return {
		repositories: data && data.repositories,
		loading,
		refetch,
		fetchMore: handleFetchMore,
		...result,
	};
};

export default useRepositories;
