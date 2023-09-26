import { plindrom } from './getPlindrom'

describe('plindrom', () => {
    test('isPlindrom',() => {
        const str1= 'abcba'
        const isPlindrom = plindrom(str1)
        expect(isPlindrom).toBe(true)
    })
    test('isPlindrom false')
    const str2 = 'abcb'
    const isNotPlindrom = plindrom(str2)
    expect(isNotPlindrom).toBe(false)
})
