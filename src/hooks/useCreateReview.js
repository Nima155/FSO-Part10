import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
	const [createReview, { data }] = useMutation(CREATE_REVIEW);

	async function submitReview(val) {
		return createReview({
			variables: {
				review: {
					...val,
					rating: +val.rating,
				},
			},
		});
	}
	return [submitReview, data];
};
export default useCreateReview;
