import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInForm } from "../../components/SignIn";
// ...

describe("SignIn", () => {
	describe("SignInContainer", () => {
		it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button
			const mockFunction = jest.fn();

			const { getByTestId } = render(<SignInForm onSubmit={mockFunction} />);

			fireEvent.changeText(getByTestId("usernameField"), "elina");
			fireEvent.changeText(getByTestId("passwordField"), "1234");
			fireEvent.press(getByTestId("submitButton")); // might need to use a function called *act* here, but only if we're receiving a warning

			await waitFor(() => {
				// waitFor is used as formiks submissions are asynchronous
				// we use waitFor to wait for expectations to pass

				// expect the onSubmit function to have been called once and with a correct first argument
				expect(mockFunction.mock.calls.length).toBe(1);
				expect(mockFunction.mock.calls[0][0]).toEqual({
					username: "elina",
					password: "1234",
				});
			});
		});
	});
});
