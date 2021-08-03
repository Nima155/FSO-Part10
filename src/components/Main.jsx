import React from "react";

import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";

import RepositoryList from "./RepositoryList";

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

				<RepositoryList />
			</View>
		</>
	);
};

export default Main;
