const reverseString = (string) => {
	const splitString = string.split("");
	const newString = splitString.reverse().join("");
	return newString;
};

module.exports = reverseString;
