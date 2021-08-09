import React from "react";
import { View, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";
import { useStyles } from "../../styles/styles";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
// import { Link } from "react-router-native";

const AppBar = () => {
	const styles = useStyles();

	const { data } = useQuery(GET_AUTHORIZED_USER);

	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const userIsAuthorized = data && data.authorizedUser != null;

	const onPressSign = async () => {
		if (userIsAuthorized) {
			await authStorage.removeAccessToken(); // order of execution matters here.. first we remove and then we reset
			apolloClient.resetStore(); // this resets the store and executes any outstanding queries
		}
	};

	return (
		<View style={styles.appBarContainer}>
			{/* Scroll view allows users to scroll 
			when there are too many tabs */}
			<ScrollView horizontal>
				{/* really barebones AppBarTab component */}
				<AppBarTab testID="repoTab" text="Repositories" path="/" />
				{userIsAuthorized && (
					<AppBarTab text="Create a review" path="/create_review" />
				)}

				<AppBarTab
					text={userIsAuthorized ? "Sign Out" : "Sign in"}
					path={userIsAuthorized ? "/" : "/sign_in"}
					onPress={onPressSign}
				/>
				{!userIsAuthorized && <AppBarTab text="Sign Up" path="/sign_up" />}
			</ScrollView>
		</View>
	);
};

export default AppBar;
