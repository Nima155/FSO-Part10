export const thousander = (e) => {
	return +e > 1000 ? (+e / 1e3).toFixed(1) + "K" : e;
};
