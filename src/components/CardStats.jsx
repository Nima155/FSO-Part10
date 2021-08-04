import React from "react";
import Text from "./Text";
import { View } from "react-native";
import { useStyles } from "../styles/styles";

export default function CardStats({ stats }) {
	const styles = useStyles();
	return (
		<View style={styles.statsContainer}>
			{Object.entries(stats).map((e, i) => (
				<View key={i}>
					<Text style={styles.statsText} fontWeight="bold">
						{+e[1] > 1000 ? (+e[1] / 1e3).toFixed(1) + "K" : e[1]}
					</Text>
					<Text style={styles.statsText} color="textSecondary">
						{e[0]}
					</Text>
				</View>
			))}
		</View>
	);
}
