function stringReversal(str){
    return str.split('').reverse().join('');
}

function stringReversalManual(str){
    //Convert String To Character Array
    let charArray = str.split('');

    //Using two pointer approach try to make it in one go
    let left = 0;
    let right = charArray.length-1;

    //Swap two characters until the pointers meet in the middle
    while(left<right){
        //Swap Characters
        let temp = charArray[left];
        charArray[left] = charArray[right];
        charArray[right] = temp;

        left++;
        right--;
    }

    //Convert the character array back to string
    return charArray.join('');

}

console.log(stringReversal("hello"));
console.log(stringReversalManual("Aiswarya"));