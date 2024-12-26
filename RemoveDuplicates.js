//This Function Will Return A Set Removing Duplicates
function removeDuplicates(array){
    return [...new Set(array)];
}

console.log(removeDuplicates([3,6,4,8,5,6,7,8,9,0,3,6,8]))

function duplicatesRemovalManual(array){
    //Initialize an empty object to keep track of seen elements
    let seen = {};
    //Initialize an empty array to store unique elements
    let uniqueArr = [];

    for (let i=0;i<array.length;i++){
        //Check if the element is not in the seen object
        if(!seen[array[i]]){
            seen[array[i]] = true;
            uniqueArr.push(array[i]);
        }
    }

    return uniqueArr;
}

//Example Usage
let originalArray = [1,1,2,2,3,3,4,4,5,5,6,6,2,6,3,5,3];
let uniqueArray = duplicatesRemovalManual(originalArray);

console.log("Original Array: ",originalArray);
console.log("After Duplicates Removal: ",uniqueArray);