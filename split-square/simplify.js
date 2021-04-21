const simplify = (arr) => {
	if (arr === 0 || arr === 1) return arr;

	arr = arr.map(simplify);

	if (typeof arr[0] === "number" && arr.every((num) => num === arr[0])) return arr[0];

	return arr;
};

module.exports = { simplify };
