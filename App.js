import { ApolloProvider } from "@apollo/client";
import React from "react";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/components/Main";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import { Provider } from "react-native-paper";
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
	// console.log(Constants.manifest); // contains the contents of the config file for Expo
	return (
		<NativeRouter>
			<ApolloProvider client={apolloClient}>
				{/* Context used to share authStorage with all descendant components */}
				<AuthStorageContext.Provider value={authStorage}>
					<Provider>
						<Main />
					</Provider>
				</AuthStorageContext.Provider>
			</ApolloProvider>
		</NativeRouter>
	);
};

export default App;
