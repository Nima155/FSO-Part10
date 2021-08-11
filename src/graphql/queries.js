import { gql } from "@apollo/client";
import { CARD_DETAILS, PAGE_INFO, REVIEW_INFO } from "./fragments";
export const GET_REPOSITORIES = gql`
	${PAGE_INFO}
	${CARD_DETAILS}
	query GetRepositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(
			searchKeyword: $searchKeyword
			orderBy: $orderBy
			orderDirection: $orderDirection
			after: $after
			first: $first
		) {
			edges {
				cursor
				node {
					...CardDetails
				}
			}
			pageInfo {
				...PageDetails
			}
		}
	}
`;

export const GET_INDIVIDUAL_REPOSITORY = gql`
	${PAGE_INFO}
	${CARD_DETAILS}
	query IndividualRepo($id: ID!, $first: Int, $after: String) {
		repository(id: $id) {
			...CardDetails
			url
			reviews(first: $first, after: $after) {
				edges {
					node {
						id
						text
						rating
						createdAt
						user {
							id
							username
						}
					}
				}
				pageInfo {
					...PageDetails
				}
			}
		}
	}
`;

export const GET_AUTHORIZED_USER = gql`
	${REVIEW_INFO}
	# default value of getReview is set to false,
	# so as to avoid unnecessary network loads
	query GetAuthorizedUser($getReview: Boolean = false) {
		authorizedUser {
			id
			username
			# include directive... pretty self explanatory
			reviews @include(if: $getReview) {
				edges {
					node {
						...ReviewDetails
					}
				}
			}
		}
	}
`;
