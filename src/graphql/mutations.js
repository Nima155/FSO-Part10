import { gql } from "@apollo/client";

export const SIGN_IN = gql`
	mutation signIn($credentials: AuthorizeInput) {
		authorize(credentials: $credentials) {
			accessToken
			expiresAt
			user {
				username
			}
		}
	}
`;
export const DELETE_REVIEW = gql`
	mutation DeleteReview($id: ID!) {
		deleteReview(id: $id)
	}
`;

export const CREATE_REVIEW = gql`
	mutation CreateReview($review: CreateReviewInput) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

export const CREATE_USER = gql`
	mutation CreateUser($user: CreateUserInput) {
		createUser(user: $user) {
			username
		}
	}
`;
