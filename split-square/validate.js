const validate = (arr) => {
	if (arr === 0 || arr === 1) return true;
	if (typeof arr === "object" && arr.length % 2 === 0) {
		return arr.every(validate);
	}
	return false;
};

module.exports = { validate };
