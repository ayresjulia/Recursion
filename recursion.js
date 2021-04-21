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

function isPalindrome (str, i = 0) {
	let leftIdx = i;
	let rightIdx = str.length - i - 1;
	if (str.length === 1) return true;
	if (leftIdx >= rightIdx) return true;
	if (str[leftIdx] !== str[rightIdx]) return false;
	return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex (arr, val, i = 0) {
	if (i === arr.length) return -1;
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString (str, i = str.length - 1, res = "") {
	if (i < 0) return res;
	res += str[i];
	return revString(str, i - 1, res);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings (obj) {
	let arr = [];

	for (let i of Object.values(obj)) {
		if (typeof i === "string") {
			arr.push(i);
		} else if (typeof i === "object") {
			arr.push(...gatherStrings(i));
		}
	}
	return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch (arr, val, left = 0, right = arr.length - 1) {
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		midVal = arr[mid];
		if (midVal > val) {
			return binarySearch(arr, val, (left = 0), (right = mid - 1));
		} else if (midVal < val) {
			return binarySearch(arr, val, (left = mid + 1), (right = arr.length - 1));
		} else {
			return mid;
		}
	}
	return -1;
}

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
