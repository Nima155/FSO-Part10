import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";
export default function AppBarTab({ text, onPress }) {
	return (
		<Pressable onPress={onPress}>
			<Text style={{ padding: 10, color: "white" }}>{text}</Text>
		</Pressable>
	);
}
