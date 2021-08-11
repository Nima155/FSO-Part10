import { useQuery } from "@apollo/client";
import { GET_INDIVIDUAL_REPOSITORY } from "../graphql/queries";

const useReviews = ({ id, first }) => {
	const { loading, fetchMore, data, ...rest } = useQuery(
		GET_INDIVIDUAL_REPOSITORY,
		{
			fetchPolicy: "cache-and-network",
			variables: {
				id,
				first,
			},
		}
	);

	function fetchReview() {
		if (loading || !data?.repository.reviews.pageInfo.hasNextPage) {
			return;
		}

		fetchMore({
			variables: {
				after: data?.repository.reviews.pageInfo.endCursor,
			},
		});
	}

	return {
		fetchReview,
		data,
		...rest,
	};
};
export default useReviews;
