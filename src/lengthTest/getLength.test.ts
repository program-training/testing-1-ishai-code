import { getStrLength } from "./getLength";

describe('getLength', () => {
    test('length', () => {
        const str = '12345'
        const testLength = getStrLength(str)
        expect(testLength).toBe(5)
    })
})