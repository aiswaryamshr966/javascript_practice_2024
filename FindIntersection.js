//This function will find the intersection between two arrays,
//which is the common elements in both the arrays

function findIntersection(array1,array2){
    return array1.filter(value=>array2.includes(value));
}

//Example Usage
let array1 = [1,2,3,4,5];
let array2 = [3,4,5,6,7];

console.log("Both The Arrays: ",array1," ",array2);
console.log("Common Elements: ",findIntersection(array1,array2));

//Converting the function into manual implementation
function findIntersectionManual(array1,array2){
    //Initialize an empty object which will keep track of the elements of the first array
    let seen = {};
    //Initialize another empty array to store the intersection
    let intersection = [];

    //Fill the objects into seen from the first array
    for (let i=0;i<array1.length;i++){
        seen[array1[i]] = true;
    }

    //Iterate through the second array and find the common elements
    for (let i=0;i<array2.length;i++){
        if(seen[array2[i]]){
            intersection.push(array2[i]);
            delete seen[array2[i]];
        }
    }

    return intersection;
}

//Example Usage
let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [2, 2, 3, 5, 7];
let result = findIntersection(arr1, arr2);
console.log("Intersection:", result);