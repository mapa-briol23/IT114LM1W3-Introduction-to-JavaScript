/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

const squareNum = numbers.map(num => num * num)
console.log(squareNum)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

const evenNum = numbers.filter(num => num % 2 === 0)
console.log(evenNum)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

const sum = numbers.reduce((x, y) => x + y, 0)
console.log("Sum:", sum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

const upCaseWord = words.map(word => word.toUpperCase())
console.log(upCaseWord)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

const wordArray = ["fall", "artist", "love", "with", "in", "an"]

const moreFour = wordArray.filter(word => word.length > 4)
console.log(moreFour)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

const singleString = wordArray.reduce((wordnth, anotherWord) => wordnth + " " + anotherWord, "")
console.log(singleString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: The map method allows you to transform the elements and return it through an array. 
// The filter method, by the name itself, allows you to filter elements the way you want them to and it can be 
// through conditional statements.
// The reduce method allows you to make the elements of an array into a single object or value.