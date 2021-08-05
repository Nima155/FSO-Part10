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

const SignIn = () => {
	const styles = useStyles();
	const [signIn] = useSignIn();
	const history = useHistory();
	const onSubmit = async ({ username, password }) => {
		try {
			const { data } = await signIn({ username, password });
			console.log(data);
			history.push("/");
		} catch (error) {
			console.log(error.message);
		}
	};

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
						style={{ marginTop: 10 }}
					/>
					<FormikTextInput
						name="password"
						placeholder="Password"
						secureTextEntry
					/>

					<Pressable onPress={handleSubmit}>
						<Text
							style={[styles.primaryContainer, styles.textBox, { padding: 9 }]}
						>
							Sign in
						</Text>
					</Pressable>
				</View>
			)}
		</Formik>
	);
};

export default SignIn;
