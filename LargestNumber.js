function findLargest(arr){
    return Math.max(...arr);
}

function findLargestManually(arr){
    if (arr.length==0) throw new Error("Array Is Empty");

    //Initialize the largest number with the first element of the array
    let largestNumber = arr[0];

    //Iterate through the array starting from the second element
    for (let i=1;i<=arr.length;i++){
        //If the current element is larger than the largest number found so far,
        if (arr[i]>largestNumber) largestNumber = arr[i]; //Update the largest number.
    }

    return largestNumber;
}

console.log("The Largest Number In The Array: "+findLargest([1,2,3,4,5,6,7,8,9,10]));
console.log("The Largest Number In The Array: "+findLargestManually([10,20,30,40,50,60,70,80,90]));

//For Unsorted Array
const array = [45, 22, 78, 13, 99, 24, 60];
console.log("The Largest Number From The Sunsorted Array: "+findLargestManually(array));