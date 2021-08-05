import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const { apolloAddress } = Constants.manifest.extra;

const httpLink = createHttpLink({
	// Replace the IP address part with your own IP address!
	uri: apolloAddress, // an environment independent variable
});

const createApolloClient = (authStorage) => {
	const authLink = setContext(async (_, { headers }) => {
		// send the token if any back to the Apollo server
		try {
			const accessToken = await authStorage.getAccessToken();
			return {
				headers: {
					...headers,
					authorization: accessToken ? `Bearer ${accessToken}` : "",
				},
			};
		} catch (e) {
			console.log(e);
			return {
				headers,
			};
		}
	});
	return new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
