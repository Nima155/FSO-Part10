import { View } from "react-native";
import { useStyles } from "../styles/styles";
import React from "react";
const ItemSeparator = () => {
	const { cardSeparator } = useStyles();
	return <View style={cardSeparator} />;
};

export default ItemSeparator;
