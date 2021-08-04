import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import { useTheme } from "../styles/themes";

const theme = useTheme();

const styles = StyleSheet.create({
	text: {
		color: theme.color.textTertiary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.primary,
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.color.textSecondary,
	},
	colorPrimary: {
		color: theme.color.primaryBackground,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
	const textStyle = [
		styles.text,
		color === "textSecondary" && styles.colorTextSecondary,
		color === "primary" && styles.colorPrimary,
		fontSize === "subheading" && styles.fontSizeSubheading,
		fontWeight === "bold" && styles.fontWeightBold,
		style,
	];

	return <NativeText style={textStyle} {...props} />;
};

export default Text;
