import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { View, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { useStyles } from "../styles/styles";
import Text from "./Text";
import useSignUp from "../hooks/useSignUp";
import { useHistory } from "react-router-native";

export default function SignUp() {
	const styles = useStyles();
	const [signUp] = useSignUp();
	const history = useHistory();

	const onSignUp = async (val) => {
		try {
			await signUp(val);
			history.push("/");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<Formik
			onSubmit={onSignUp}
			initialValues={{
				username: "",
				password: "",
				repeatPassword: "",
			}}
			validationSchema={Yup.object().shape({
				username: Yup.string()
					.min(1, "Username must be at least 1 character long")
					.max(30, "Username cannot be longer than 30 characters in length")
					.required("Username is required"),
				password: Yup.string()
					.min(5, "Password must be at least 5 characters long")
					.max(50, "Password cannot be longer than 50 characters in length")
					.required("Password is required"),
				repeatPassword: Yup.string()
					.oneOf([Yup.ref("password"), null])
					.required("Repeat password is required"),
			})}
		>
			{({ handleSubmit }) => (
				<View
					style={(styles.formikInputContainer, { backgroundColor: "white" })}
				>
					<FormikTextInput
						name="username"
						style={styles.firstElement}
						placeholder="Username"
					/>
					<FormikTextInput
						name="password"
						placeholder="Password"
						secureTextEntry
					/>
					<FormikTextInput
						name="repeatPassword"
						placeholder="Confirm your password"
						secureTextEntry
					/>

					<Pressable onPress={handleSubmit}>
						<Text
							style={[
								styles.primaryContainer,
								styles.textBoxLarge,
								{ padding: 9 },
							]}
						>
							Sign Up
						</Text>
					</Pressable>
				</View>
			)}
		</Formik>
	);
}
