import { gql } from "@apollo/client";
import { CARD_DETAILS } from "./fragments";
export const GET_REPOSITORIES = gql`
	${CARD_DETAILS}
	query {
		repositories {
			edges {
				node {
					...CardDetails
				}
			}
		}
	}
`;
export const GET_INDIVIDUAL_REPOSITORY = gql`
	${CARD_DETAILS}
	query IndividualRepo($id: ID!) {
		repository(id: $id) {
			...CardDetails
			url
			reviews {
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
			}
		}
	}
`;

export const GET_AUTHORIZED_USER = gql`
	query {
		authorizedUser {
			id
			username
		}
	}
`;
