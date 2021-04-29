const capitalizeString = (string) => {
	let splitString = string.split("");
	splitString[0] = splitString[0].toUpperCase();
	let newString = splitString.join("");
	return newString;
}

module.exports = capitalizeString;