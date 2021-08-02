import React from "react";

import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";

import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
	// basic styling with StyleSheet.. provided by React Native
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<>
			<View style={styles.container}>
				<AppBar />
				{/* text must go inside <Text> in React Native */}
				{/* <Text>Rate Repository Application</Text> */}
				<RepositoryList />
			</View>
		</>
	);
};

export default Main;
