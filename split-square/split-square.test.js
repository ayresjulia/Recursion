const { dump } = require("./dump");
const { validate } = require("./validate");
const { simplify } = require("./simplify");

describe("dump", function () {
	it("returns a string of all numbers in an array separated by space", function () {
		expect(dump(0)).toBe("0");
		expect(dump([ 0, 1, 0, 1 ])).toBe("0 1 0 1 ");
		expect(dump([ 0, 0, 0, [ 1, 1, 1, 1 ] ])).toBe("0 0 0 1 1 1 1 ");
		expect(dump([ 0, 0, 0, [ 1, 1, 1, [ 0, 0, 0, [ 1, 1, 1, 1 ] ] ] ])).toBe(
			"0 0 0 1 1 1 0 0 0 1 1 1 1 "
		);
	});
});

describe("validate", function () {
	it("returns true if square is valid", function () {
		expect(validate(0)).toBe(true);
		expect(validate([ 1, 1, 1, 1 ])).toBe(true);
		expect(validate([ 1, 0, [ 1, [ 0, 0, 0, 0 ], 1, [ 1, 1, 1, 1 ] ], 1 ])).toBe(true);
		expect(validate([ 1, [ 1, 0, 1, [ 0, [ 0, 0, 0, 0 ], 1, 1 ] ], [ 1, 0, 1, 0 ], 1 ])).toBe(
			true
		);
	});
	it("returns false if square is NOT valid", function () {
		expect(validate(2)).toBe(false);
		expect(validate([ 1, 1, 1, 1, 1 ])).toBe(false);
		expect(validate([ 1, 0, [ 1, [ 0, 0, 0, 0, 1 ], 1, [ 1, 1, 1, 1 ] ], 1 ])).toBe(false);
		expect(validate([ 1, [ 1, 0, 1, [ 0, [ 0, 0, 0 ], 1, 1 ] ], [ 1, 0, 1, 0 ], 1 ])).toBe(
			false
		);
	});
});

describe("simplify", function () {
	it("simplifies split squares into a simple square", function () {
		expect(simplify(0)).toBe(0);
		expect(simplify([ 1, 1, 1, 1 ])).toBe(1);
		expect(simplify([ 0, 0, 0, 0 ])).toBe(0);
		expect(simplify([ 1, 0, 1, 0 ])).toStrictEqual([ 1, 0, 1, 0 ]);
		expect(simplify([ 1, 0, 1, [ 1, 1, 1, 1 ] ])).toStrictEqual([ 1, 0, 1, 1 ]);
		expect(simplify([ 1, 1, 1, [ 1, 1, 1, 1 ] ])).toBe(1);
		expect(simplify([ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], 1, 1 ])).toBe(1);
		expect(simplify([ 1, 0, [ 1, [ 0, 0, 0, 0 ], 1, [ 1, 1, 1, 1 ] ], 1 ])).toStrictEqual([
			1,
			0,
			[ 1, 0, 1, 1 ],
			1
		]);
	});
});
