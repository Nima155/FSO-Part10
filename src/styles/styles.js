import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { useTheme } from "./themes";
export const useStyles = () => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		tabItem: {
			color: theme.color.primaryText,
			padding: theme.spacing.L,
			marginTop: 30,
		},
		searchAndSortContainer: {
			padding: theme.spacing.L,
		},
		container: {
			flex: 1,
			backgroundColor: theme.color.appBackground,
		},
		centeredContainer: {
			justifyContent: "center",
			alignItems: "center",
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
		textBoxLarge: {
			marginBottom: theme.spacing.L,
			marginRight: theme.spacing.L,
			marginLeft: theme.spacing.L,
		},
		textBoxMedium: {
			marginBottom: theme.spacing.M,
			marginRight: theme.spacing.M,
			marginLeft: theme.spacing.M,
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
		reviewScoreContainer: {
			marginRight: theme.spacing.L,
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 25,
			borderStyle: theme.borders.solid,
			borderColor: theme.color.primaryBackground,
			borderWidth: 1,
			height: 50,
			width: 50,
		},
		firstElement: {
			marginTop: theme.spacing.L,
		},
	});
	return styles;
};
