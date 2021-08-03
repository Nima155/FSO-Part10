import React from "react";

import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import { Switch, Route } from "react-router";
import RepositoryList from "./RepositoryList";
import { Redirect } from "react-router-native";
import SignIn from "./SingIn";

const styles = StyleSheet.create({
	// basic styling with StyleSheet.. provided by React Native
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: "#e1e4e8",
	},
});

const Main = () => {
	return (
		<>
			<View style={styles.container}>
				<AppBar />
				<Switch>
					<Route path="/sign_in" exact>
						<SignIn />
					</Route>
					<Route path="/" exact>
						<RepositoryList />
					</Route>
					<Redirect to="/" />
				</Switch>
			</View>
		</>
	);
};

export default Main;
