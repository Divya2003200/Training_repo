
function filterOdd(arr){
    return arr.filter(i=>i%2==0)
}

function doubleNumbers(arr){
    return arr.map(i=>i*2)
}

function calculateSum(arr){
    return arr.reduce((acc,val)=>acc=acc+val,0)
}

function maxNum(arr){
 return Math.max(...arr)
}

function processData(arr,callback){
return callback(arr)
}


console.log(processData([1,2,3,4,5],filterOdd))//[ 2, 4 ]

console.log(processData([1,2,3,4,5],doubleNumbers))//[ 2, 4, 6, 8, 10 ]

console.log(processData([1,2,3,4,5],calculateSum))//15

console.log(processData([1,2,3,4,5],maxNum))//5