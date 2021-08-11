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

export const REVIEW_INFO = gql`
	fragment ReviewDetails on Review {
		repository {
			id
			fullName
		}
		id
		rating
		createdAt
		text
	}
`;

export const PAGE_INFO = gql`
	fragment PageDetails on PageInfo {
		startCursor
		hasNextPage
		hasPreviousPage
		endCursor
	}
`;
