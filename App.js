import { ApolloProvider } from "@apollo/client";
import React from "react";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/components/Main";

const apolloClient = createApolloClient();

const App = () => {
	// console.log(Constants.manifest); // contains the contents of the config file for Expo
	return (
		<NativeRouter>
			<ApolloProvider client={apolloClient}>
				<Main />
			</ApolloProvider>
		</NativeRouter>
	);
};

export default App;
