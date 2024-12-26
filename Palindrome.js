function palindrome(str){
    const reversed = str.split('').reverse().join('');
    return reversed==str;
}

if (palindrome("mom")) console.log("The Given Input Is Palindrome");
else console.log("The Given Input Is Not Palindrome");