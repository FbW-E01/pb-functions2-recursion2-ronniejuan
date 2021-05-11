// # Recursion

// #### Write a function which can reverse string
// * Write a JavaScript function that reverse a string.
// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh


// ```javascript
//     const string="hello world"
//     reverse(string)  // return dlrow olleh
// ```


function reverseString(str){
    if(!str){
        return"---> ";
    }
    return reverseString(str.substring(1)) + str.charAt(0);
}
console.log(reverseString("Hello World"))