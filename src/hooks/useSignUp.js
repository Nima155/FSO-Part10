import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";
const useSignUp = () => {
	const [doSignUp] = useMutation(CREATE_USER);

	const [signIn, dataFromSignIn] = useSignIn();

	async function signUp({ username, password }) {
		await doSignUp({
			variables: {
				user: {
					password,
					username,
				},
			},
		});

		return signIn({ username, password });
	}

	return [signUp, dataFromSignIn];
};

export default useSignUp;
