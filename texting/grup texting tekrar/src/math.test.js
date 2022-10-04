const { sum } = require("./math.js");


describe("sum fonk testi", () => {
    it("sum var mı yok mu ?", () => {
        expect(sum()).toBeDefined();
    })

    it("10+15=25", () => {
        expect(sum(10,15)).toBe(25);
    })
})