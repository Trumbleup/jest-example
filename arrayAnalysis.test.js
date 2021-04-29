const arrayAnalysis = require("./arrayAnalysis");

const testObj = arrayAnalysis([1, 3, 5]);

test("The average of 1, 3, 5 is 3", () => {
	expect(testObj.average).toBe(3);
});

test("The minimum of 1, 3, 5 is 1", () => {
	expect(testObj.min).toBe(1);
});

test("The maximum of 1, 3, 5 is 5", () => {
	expect(testObj.max).toBe(5);
});

test("The length of 1, 3, 5 is 3", () => {
	expect(testObj.length).toBe(3);
});
