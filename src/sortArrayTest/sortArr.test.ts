import  sortArrayAsc  from "./sortArr";

describe('sort array', () => {
    test('sort', () => {
        const arr = [5, 4, 7, 1]
        const sortedArr = [1, 4, 5, 7] 
        const sortedArrFunc = sortArrayAsc(arr)
        expect(sortedArrFunc).toEqual(sortedArr)
    })
})