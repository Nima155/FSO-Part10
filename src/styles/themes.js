// The theme object is where we
//will define primary colours, fonts,
// spacings, etc
import { palette } from "./palette";
import { Platform } from "react-native";
const theme = {
	color: {
		appBarBackground: palette.grayishBlack85,
		textSecondary: palette.darkGray,
		textTertiary: palette.grayishBlack,
		primaryBackground: palette.blue,
		repositoryItemBackground: palette.white,
		appBackground: palette.lightGray,
		primaryText: palette.white,
		errorText: palette.red,
	},
	fontSizes: {
		body: 14,
		subheading: 16,
	},
	fonts: {
		primary: Platform.select({
			android: palette.roboto,
			ios: palette.arial,
			default: palette.system,
		}),
	},
	fontWeights: {
		normal: "400",
		bold: "700",
	},
	borders: {
		smooth: 5,
		round: "50%",
		solid: "solid",
	},
	spacing: {
		S: 4,
		M: 7,
		L: 10,
		XL: 15,
	},
};

export const useTheme = () => theme; // we can extend this
// so that it returns a different theme based on a parameter
