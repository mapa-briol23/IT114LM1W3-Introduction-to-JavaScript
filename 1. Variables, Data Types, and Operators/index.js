/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
// Answer: Moving the variable after the log brings an undefined outcome.

console.log(myVariable);
var myVariable = 5;

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let sampleVariable = 10;

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
/* Answer: After reassigning the value of the variable and running the code, an error is found
 saying that the variable with the reassigned value is a constant variable. */

const variable = 17;

variable = 18;

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is used to declare either for local or or global variables
// let is used to declare a local variable only, so it is block-scoped.
// const has the same function with let, however, the value should not be reassigned or changed throughout the program.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

var myVariable = 10 + 7
console.log(myVariable)

let sampleNumber = 2 * 10
console.log(sample)

let number = 20 - 5
console.log(number)

const num = 50 / 5
console.log(num)


// Checkpoint 1.2 What operators did you use?
// Answer: I used the addition, subtraction, multiplication, and division assignment operators
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

console.log("Hello " + "World.")

var string = "Let the games "
string += "begin."
console.log(string)

// Checkpoint 1.3 What operators did you use?
// Answer: I used concatenation through the plus sign or addition assignment.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

const num1 = true && true
const num2 = "hello" && "world"

var number1 = "hello" || "hello"
var number2 = false || false

let sample = !false;

console.log(num1)
console.log(num2)
console.log(number1)
console.log(number2)
console.log(sample)

// Checkpoint 1.4 What operators did you use?
// Answer: I used the AND (&&), OR (||) operator, and the NOT (!) operator.


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

const sampleNum = [1, 2, 3, 4]

console.log(2 in sampleNum)
console.log(4 in sampleNum)

const sampleList = ["hello", "world"]

console.log(3 instanceof sampleNum)
console.log(0 instanceof sampleNum)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: The expression "[] == false" evaluates as true because JavaScript treats empty bracket such as [] and {}
// as false. The expression translates to as "false == false", that is why it evaluates into true.
// Your code here