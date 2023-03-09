function palindrome(str) {
    if (str.split('').reverse().join('') === str) {
        return ("c'est un palindrome");
    }
    else{
        return ("ce n'est pas un palindrome");
    }
}
console.log(palindrome("kayak"))