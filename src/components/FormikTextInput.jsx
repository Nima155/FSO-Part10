import React from "react";

import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import { View } from "react-native";
import { useStyles } from "../styles/styles";
import { useTheme } from "../styles/themes";

const FormikTextInput = ({ style, name, ...props }) => {
	const [field, meta, helpers] = useField(name);
	const styles = useStyles();
	const theme = useTheme();
	// Check if the field is touched and the error message is present
	const showError = meta.touched && meta.error;

	return (
		<View style={styles.textBoxLarge}>
			<TextInput
				onChangeText={(value) => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
				style={[
					styles.textInput,
					style,
					showError && { borderColor: theme.color.errorText },
				]}
			/>
			{/* Show the error message if the value of showError variable is true  */}
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</View>
	);
};

// const styles = StyleSheet.create({
// 	errorText: {
// 		marginTop: 5,
// 	},
// 	textInputStyle: {
// 		borderRadius: theme.borders.smoothSquare,
// 		borderStyle: theme.borders.borderStyle,
// 		borderWidth: 1,
// 		borderColor: theme.colors.textSecondary,
// 		margin: theme.margins.big,
// 		padding: theme.paddings.big,
// 		// alignSelf: "stretch",
// 		fontSize: theme.fontSizes.body,
// 		fontWeight: theme.fontWeights.bold,
// 	},
// 	viewStyle: {
// 		justifyContent: "space-evenly",
// 	},
// });

export default FormikTextInput;
