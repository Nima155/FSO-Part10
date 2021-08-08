import React from "react";

import { View } from "react-native";
import AppBar from "./AppBar";
import { Switch, Route } from "react-router";
import RepositoryList from "./RepositoryList";
import { Redirect } from "react-router-native";
import SignIn from "./SignIn";
import { useStyles } from "../styles/styles";
import RepositoryItem from "./RepositoryItem";

const Main = () => {
	const styles = useStyles();
	return (
		<>
			<View style={styles.container}>
				<AppBar />
				<Switch>
					<Route path="/sign_in" exact>
						<SignIn />
					</Route>
					<Route path="/:id">
						<RepositoryItem showLink={true} style={styles.cardContainer} />
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
