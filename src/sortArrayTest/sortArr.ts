export default function sortArrayAsc(arr:number[]):number[]{
    const newArr = arr.sort((a, b) => a - b)
    return newArr
}