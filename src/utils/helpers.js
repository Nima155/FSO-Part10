export const elementParser = (e) => {
	let mt = e[0].match(/[a-z]+|[A-Z]\w+/g);
	if (mt.length > 1 && mt[1] !== "Name") {
		mt.pop();
	}
	const str = mt.join(" ");
	return `${str[0].toUpperCase() + str.slice(1).toLowerCase()}: ${e[1]}\n`;
};
