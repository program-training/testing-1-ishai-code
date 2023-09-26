import sumOfArray from "./getSum";

describe('test sum', () => {
    test('get correct sum number', () => {
        const arr = [4, 5, 6]
        const sum = 15
        const sumFunc = sumOfArray(arr)
        expect(sumFunc).toBe(sum)
    })
    test('sum is high then 10', () => {
        const arr = [4, 5, 6]
        const number = 10
        const sumFunc = sumOfArray(arr)
        expect(sumFunc).toBeGreaterThan(number)
    })
})