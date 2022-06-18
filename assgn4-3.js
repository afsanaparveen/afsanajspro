function isPalindrome(string)      //to check whether the string is palindrome or not
    {
        return string==string.split('').reverse().join('');
        
    }


console.log(isPalindrome('121'));