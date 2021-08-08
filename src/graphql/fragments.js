import { gql } from "@apollo/client";

export const CARD_DETAILS = gql`
	fragment CardDetails on Repository {
		fullName
		ratingAverage
		reviewCount
		stargazersCount
		forksCount
		ownerAvatarUrl
		description
		language
		id
	}
`;
