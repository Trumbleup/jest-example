const capitalizeString = require("./capitalizeString");

test("Capitalize bigboy to Bigboy", () => {
	expect(capitalizeString("bigboy")).toBe("Bigboy");
});
