import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { useTheme } from "./themes";
export const useStyles = () => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.color.appBackground,
		},
		appBarContainer: {
			paddingTop: Constants.statusBarHeight,
			backgroundColor: theme.color.appBarBackground,
			flexDirection: "row",
		},
		cardSeparator: {
			height: theme.spacing.L,
		},
		cardContainer: {
			padding: theme.spacing.L,
			backgroundColor: theme.color.repositoryItemBackground,
		},
		cardBioContainer: {
			marginBottom: theme.spacing.L,
			flexDirection: "row",
		},
		cardBioAboutContainer: {
			flexShrink: 1,
			justifyContent: "space-evenly",
		},
		primaryContainer: {
			backgroundColor: theme.color.primaryBackground,
			color: theme.color.primaryText,
			padding: theme.spacing.S,
			borderRadius: theme.borders.smooth,
			textAlign: "center",
		},
		textBox: {
			marginBottom: theme.spacing.L,
			marginRight: theme.spacing.L,
			marginLeft: theme.spacing.L,
		},
		avatarImage: {
			height: 50,
			width: 50,
			borderRadius: theme.borders.smooth,
			marginRight: theme.spacing.L,
		},
		formikInputContainer: {
			justifyContent: "space-evenly",
		},
		textInput: {
			borderRadius: theme.borders.smooth,
			borderStyle: theme.borders.solid,
			borderColor: theme.color.appBackground,
			padding: theme.spacing.S,
			borderWidth: 1,
		},
		errorText: {
			marginTop: theme.spacing.S,
			color: theme.color.errorText,
		},
		statsContainer: {
			flexDirection: "row",
			flexGrow: 0,
			justifyContent: "space-evenly",
		},
		statsText: {
			textAlign: "center",
		},
	});
	return styles;
};
