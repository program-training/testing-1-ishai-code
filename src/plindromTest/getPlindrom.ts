export function plindrom(str:string):boolean{
    const reverseStr = str.split('').reverse().join('')
    if (reverseStr === str){
        return true
    }else{
        return false
    }
}