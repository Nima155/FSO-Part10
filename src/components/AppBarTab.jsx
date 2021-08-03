import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
export default function AppBarTab({ onPress, path, text }) {
	return (
		<Link onPress={onPress} component={Pressable} to={path}>
			<Text style={{ padding: 10, color: "white" }}>{text}</Text>
		</Link>
	);
}
//
