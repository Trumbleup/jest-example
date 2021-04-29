const arrayAnalysis = (array) => {
	const getAverage = (array) => {
		let total = 0;
		let length = array.length;
		let refArray = array;
		refArray.forEach((num) => (total += num));
		return total / length;
	};
	const getMinNumber = (array) => {
		let minNumber = array[0];
		array.forEach((num) => {
			if (num < minNumber) {
				minNumber = num;
			}
		});
		return minNumber;
	};
	const getMaxNumber = (array) => {
		let maxNumber = array[0];
		array.forEach((num) => {
			if (num > maxNumber) {
				maxNumber = num;
			}
		});
		return maxNumber;
	};
	const getLength = (array) => {
		return array.length;
	};
	const analysisObj = {
		average: getAverage(array),
		min: getMinNumber(array),
		max: getMaxNumber(array),
		length: getLength(array)
	}
	return analysisObj;
};

module.exports = arrayAnalysis;
