import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";
const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.textPrimary,
		opacity: 0.85,
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			{/* really barebones AppBarTab component */}
			<AppBarTab text="Repositories" />
		</View>
	);
};

export default AppBar;
