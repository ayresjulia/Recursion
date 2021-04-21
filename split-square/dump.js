function dump (arr) {
	let res = "";
	if (typeof arr !== "object") return res + arr;
	for (let n of arr) {
		if (typeof n === "object") {
			res += dump(n);
		} else if (typeof n === "number") {
			res += n + " ";
		}
	}
	return res;
}

module.exports = { dump };
