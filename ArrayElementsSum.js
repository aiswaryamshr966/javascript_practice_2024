function sumArray(array){
    return array.reduce((sum,num)=> sum+num,0);
}

function sumArrayManual(array){
    //Let the sum be initially 0
    let sum = 0;

    //Looping through the entire array and summing the elements
    for (let i=0;i<array.length;i++){
        //updating the sum
        sum=sum+array[i];
    }
    //returning the sum
    return sum;
}

const sum = sumArray([1, 2, 3, 4, 5]);
console.log("The Sum Of The Array Elements: "+sum);

const manualSum = sumArrayManual([45, 22, 78, 13, 99, 24, 60]);
console.log("The Sum Of The Array Elements: "+manualSum);