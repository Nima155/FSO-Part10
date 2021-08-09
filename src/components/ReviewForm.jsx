import { Formik } from "formik";
import React from "react";
import { useStyles } from "../styles/styles";
import * as Yup from "yup";
import { View, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import useCreateReview from "../hooks/useCreateReview";
import { useHistory } from "react-router-native";

export default function ReviewForm() {
	const styles = useStyles();
	const [addReview] = useCreateReview();
	const history = useHistory();

	const onFormSubmit = async (val) => {
		try {
			const { data } = await addReview(val);
			history.push(`/${data.createReview.repositoryId}`);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<Formik
			onSubmit={onFormSubmit}
			initialValues={{
				ownerName: "",
				repositoryName: "",
				rating: "",
				text: "",
			}}
			validationSchema={Yup.object().shape({
				ownerName: Yup.string().required("Repository owner name is required"),
				repositoryName: Yup.string().required("Repository name is required"),
				rating: Yup.number()
					.max(100, "rating cannot go above 100")
					.min(0, "rating cannot go below 0")
					.required("Rating is required"),
			})}
		>
			{({ handleSubmit }) => (
				<View
					style={(styles.formikInputContainer, { backgroundColor: "white" })}
				>
					<FormikTextInput
						name="ownerName"
						style={styles.firstElement}
						placeholder="Repository owner name"
					/>
					<FormikTextInput
						name="repositoryName"
						placeholder="Repository name"
					/>
					<FormikTextInput
						name="rating"
						placeholder="Rating between 0 and 100"
					/>
					<FormikTextInput name="text" placeholder="Review" multiline />
					<Pressable testID="submitButton" onPress={handleSubmit}>
						<Text
							style={[
								styles.primaryContainer,
								styles.textBoxLarge,
								{ padding: 9 },
							]}
						>
							Create a review
						</Text>
					</Pressable>
				</View>
			)}
		</Formik>
	);
}
