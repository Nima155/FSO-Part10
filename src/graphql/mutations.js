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
// mutation {
// 	createReview(review: {repositoryName: "lombok", ownerName: "rzwitserloot", rating: 44, text: "mediocre at best"}) {
// 	  user {
// 		username
// 	  }
// 	}
//   }
export const CREATE_REVIEW = gql`
	mutation CreateReview($review: CreateReviewInput) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;
