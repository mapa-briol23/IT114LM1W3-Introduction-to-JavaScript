/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

//const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

const randomNumber = 15;

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

if (randomNumber > 50){
    console.log("more than fifty")
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here

if (randomNumber % 2 === 0){
    console.log("even")
}
else {
    console.log("odd")
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 === 0){
    console.log("fizz")
} else if (randomNumber % 5 === 0){
    console.log("buzz")
} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0){
    console.log("fizzbuzz")
} else {
    console.log(randomNumber)
}

let toDisplay = randomNumber
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd"

console.log("toDisplay", toDisplay);


// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: The switch statements works or functions the same as the if-else statements. It evaluates expressions 
// by comparing the value to each cases. If the value matches the case, it will run the block of statements
// under that specific case block. The switch statements also use the "default" and "break" keywords.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here

for (let i = 1; i <= 10; i++){
    console.log(i)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

var i = 0

while (i < list.length){
    console.log(list[i])
    i++
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The do-while loop contains the do statement and the while condition. The do statement contains
// block of code that will run. As long as the while condition is true, the do statement will continue to run.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (const fruit of list) {
  console.log(fruit);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (const i in list) {
    const fruits = list[i];
    console.log(fruits);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

list.forEach(fruitArray => console.log(fruitArray));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: The for of loop is used to iterate values or elements of arrays, strings, and more but it can not be used
// to iterate an object. The for in loop is used to iterate keys of an object but it is suggested to avoid using it 
// for iterables such as arrays and strings. The for each loop is used when all elements of an array or list are
// used respectively and if you want iterate the same exact order of the elements in the array or list.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((0 * 5)); // feel free to mock this value for testing

try {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
} catch (e) {
    console.error(e.message)
} finally {
    console.log("cleaning up resources")
}
