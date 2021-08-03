import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";
// import { Link } from "react-router-native";
const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.textPrimary,
		opacity: 0.85,
		flexDirection: "row",
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
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
