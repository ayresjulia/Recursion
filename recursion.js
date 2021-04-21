/** product: calculate the product of an array of numbers. */

function product (nums, i = 0) {
	if (i === nums.length) return 1;
	return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest (words, i = 0, longestWord = 0) {
	if (i === words.length) return longestWord;
	longestWord = Math.max(words[i].length, longestWord);
	return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther (str, i = 0, res = "") {
	if (i >= str.length) return res;
	res += str[i];
	return everyOther(str, i + 2, res);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome (str, i = 0) {
// 	let leftIdx = i;
// 	let rightIdx = str.length - 1;

// 	if (str.length === 1) return true;
// 	leftIdx === rightIdx ? true : false;
// 	return isPalindrome(str, i + 1);
// }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex (arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString (str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings (obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch (arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
