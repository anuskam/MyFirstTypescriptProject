import { add, substract } from "../src/math"

describe ("Math functions", () => {
    it("should add two numbers correctly", () => {
        expect(add(1, 2)).toEqual(3)
    })

    it("should substract two numbers correctly", () => {
        expect(substract(3, 2)).toEqual(1)
    })
})