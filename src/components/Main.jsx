import React from "react";

import { View } from "react-native";
import AppBar from "./AppBar";
import { Switch, Route } from "react-router";
import RepositoryList from "./RepositoryList";
import { Redirect } from "react-router-native";
import SignIn from "./SignIn";
import { useStyles } from "../styles/styles";

import SingleRepositoryItem from "./SingleRepositoryItem";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";
import IndividualsReviewList from "./IndividualsReviewList";

const Main = () => {
	const styles = useStyles();
	return (
		<>
			<View style={styles.container}>
				<AppBar />
				<Switch>
					<Route path="/my_reviews" exact>
						<IndividualsReviewList />
					</Route>
					<Route path="/sign_up" exact>
						<SignUp />
					</Route>
					<Route path="/sign_in" exact>
						<SignIn />
					</Route>
					<Route path="/create_review" exact>
						<ReviewForm />
					</Route>
					<Route path="/:id" exact>
						<SingleRepositoryItem />
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
