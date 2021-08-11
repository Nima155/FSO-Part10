import React from "react";

import { Picker as SelectPicker } from "@react-native-picker/picker";

export default function RepositorySortSelector({
	setSelectedSort,
	sortCriteria,
}) {
	return (
		// <Portal>
		<SelectPicker
			selectedValue={sortCriteria}
			onValueChange={(itemValue) => setSelectedSort(itemValue)}
		>
			<SelectPicker.Item label="Latest repositories" value="byDate" />
			<SelectPicker.Item
				label="Lowest rated repositories"
				value="lowestRating"
			/>
			<SelectPicker.Item
				label="Highest rated repositories"
				value="highestRating"
			/>
		</SelectPicker>
		// </Portal>
	);
}
