import { Formik } from "formik";
import React from "react";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View } from "react-native";
import Text from "./Text";
import * as Yup from "yup";
import { useStyles } from "../styles/styles";
import useSignIn from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

// const styles = StyleSheet.create({
// 	buttonTextStyle: {
// 		backgroundColor: theme.colors.primary,
// 		color: "white",
// 		borderRadius: theme.borders.smoothSquare,
// 		margin: theme.margins.big,
// 		padding: theme.paddings.xl,
// 		// alignSelf: "stretch",
// 		textAlign: "center",
// 		fontSize: theme.fontSizes.subheading,
// 		fontWeight: theme.fontWeights.bold,
// 	},
// 	viewStyle: {
// 		backgroundColor: "white",
// 		justifyContent: "space-evenly",
// 	},
// });
export const SignInForm = ({ onSubmit }) => {
	const styles = useStyles();
	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			onSubmit={onSubmit}
			validationSchema={Yup.object().shape({
				username: Yup.string().required("Username required"),
				password: Yup.string().required("Password required"),
			})}
		>
			{({ handleSubmit }) => (
				<View
					style={[styles.formikInputContainer, { backgroundColor: "white" }]}
				>
					<FormikTextInput
						name="username"
						placeholder="Username"
						style={styles.firstElement}
						testID="usernameField"
					/>
					<FormikTextInput
						name="password"
						placeholder="Password"
						secureTextEntry
						testID="passwordField"
					/>

					<Pressable onPress={handleSubmit} testID="submitButton">
						<Text
							style={[
								styles.primaryContainer,
								styles.textBoxLarge,
								{ padding: 9 },
							]}
						>
							Sign in
						</Text>
					</Pressable>
				</View>
			)}
		</Formik>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();
	const history = useHistory();

	const onSubmit = async ({ username, password }) => {
		try {
			// eslint-disable-next-line no-unused-vars
			const { data } = await signIn({ username, password });
			// console.log(data);
			history.push("/"); // redirect back to home
		} catch (error) {
			console.log(error.message);
		}
	};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
