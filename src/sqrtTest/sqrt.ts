export default function getSqrt(num:number){
    if (num < 0){
        throw new Error('negative number is not aloud')
    }
    const result = Math.sqrt(num)
    return result
}
