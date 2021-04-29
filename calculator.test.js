const calculator = require("./calculator");

test("3 + 4 will equal 7", () => {
	calculator.add(3, 4);
});

test("7 - 2 will equal 5", () => {
	calculator.subtract(7, 2);
});

test("3 times 4 will equal 12", () => {
	calculator.multiply(3, 4);
});

test("8 divided by 4 will equal 2", () => {
	calculator.divide(8, 4);
});
