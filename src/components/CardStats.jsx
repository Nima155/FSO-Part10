import React from "react";
import Text from "./Text";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	textStyle: {
		textAlign: "center",
	},
	viewStyle: {
		display: "flex",
		flexGrow: 0,
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
});

export default function CardStats({ stats }) {
	return (
		<View style={styles.viewStyle}>
			{Object.entries(stats).map((e, i) => (
				<View key={i}>
					<Text style={styles.textStyle} fontWeight="bold">
						{+e[1] > 1000 ? (+e[1] / 1e3).toFixed(1) + "K" : e[1]}
					</Text>
					<Text style={styles.textStyle} color="textSecondary">
						{e[0]}
					</Text>
				</View>
			))}
		</View>
	);
}
