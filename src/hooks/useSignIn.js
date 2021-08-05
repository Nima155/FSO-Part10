import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

export default function useSignIn() {
	const [login, { data }] = useMutation(SIGN_IN);

	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const signIn = async ({ username, password }) => {
		const res = await login({
			variables: {
				credentials: {
					username,
					password,
				},
			},
		});

		await authStorage.setAccessToken(
			JSON.stringify(res.data.authorize.accessToken)
		);
		apolloClient.resetStore(); // to get rid of cached token.. token is cached as it
		// is returned by a mutation
		return res;
	};

	return [signIn, data];
}
