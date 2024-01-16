/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    console.log("Hello,", name)
}

greet("Phaula")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declarations are hoisted which means it can be called even before delcaring them. Unlike
// function expression, it will result to an error when it is hoisted before its declaration.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

const calculateArea = function(length, width) {
    return length * width
}

const area = calculateArea(2, 20)

console.log("Area of the rectangle:",area)

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function wich includes a function that is passed as an argument to a different 
// function This makes it possible for one function to call another.

function greet(name, callback) {
    console.log("Hi,",name)
    callback()
}

function message() {
    console.log("Hello, World")
}

greet("Phaula", message)

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

const numbers = [1, 2, 3, 4, 5]
const incrementByOne = (element) => element + 1

const modifiedNum = modifyArray(numbers, incrementByOne)

console.log(modifiedNum)

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const mathUtils = require('./mathUtils')

const sum = mathUtils.add(7,10)
console.log("Sum:", sum)

console.log("PI:", mathUtils.PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const isPalindrome = require('./isPalindrome')

var sample = "mom"
const result = isPalindrome(sample)

if (result === true){
    console.log("Is",sample,"a palindrome? true")
}
else{
    console.log("Is",sample,"a palindrome? false")
}

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The require function allows the import of all the exported code from the other module to the mmain 
// or specific module. module.exports is used to add something in that particular module to other modules. It makes 
 // a particular variable or code to be used by other modules. 
// In my opinion, the module.exports and require function is much more practical to use especially if you want to
// export and import multiples. It is better to use the require function and module.exports since the export 
// keyword only allows you to export only one.
