import React from "react";
import { View, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";
import { useStyles } from "../styles/styles";
// import { Link } from "react-router-native";

const AppBar = () => {
	const styles = useStyles();
	return (
		<View style={styles.appBarContainer}>
			{/* Scroll view allows users to scroll 
			when there are too many tabs */}
			<ScrollView horizontal>
				{/* really barebones AppBarTab component */}
				<AppBarTab text="Repositories" path="/" />
				<AppBarTab text="Sign in" path="/sign_in" />
			</ScrollView>
		</View>
	);
};

export default AppBar;
