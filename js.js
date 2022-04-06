// program to check if the string is palindrome or not
     // to find the length of a string, first declare a const len.
     //  creat an for loop to loop through half of the string
     // check if first and last string are not same then say false.
     // othewise return true
     


function isPalindrome(string) {

   
    const len = string.length;

   
    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return 'False';
        }
    }
    return 'True';
}


const string = prompt('Enter a string: ');


const value = isPalindrome(string);

console.log(value);