import React from "react";
import { Pressable } from "react-native";
import Text from "../Text";
import { Link } from "react-router-native";
import { useStyles } from "../../styles/styles";
export default function AppBarTab({ onPress, path, text }) {
	const styles = useStyles();
	return (
		<Link onPress={onPress} component={Pressable} to={path}>
			<Text style={styles.tabItem}>{text}</Text>
		</Link>
	);
}
//
