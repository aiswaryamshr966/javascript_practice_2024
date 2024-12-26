//This Function Will Find The Sum Of Array Elements Using Functional Programming Approach
function findSum(array){
    return array.reduce((sum, number)=> sum+number,0);
}

console.log("This Sum Of All The Elements Of The Array: ",findSum([4,5,2,8,5,6]))

//This Function Will Find The Sum Of Array Elements Using Manual Logic Implementation
function findSumManual(array){
    let sum = 0;

    for (let i=0;i<array.length;i++){
        sum = sum + array[i];
    }

    return sum;
}

console.log("The Sum Of All The Elements Of The Array Manually: ",findSumManual([98,23,76,53,95,27,59]))