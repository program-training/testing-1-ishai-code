export default function sumOfArray(arr: number[]){
    let sum = arr.reduce((a, b) => a + b)
    return sum
}