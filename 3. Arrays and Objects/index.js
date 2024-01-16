/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log("First:", numbers[0]);
console.log("Fifth:", numbers[4]);
console.log("Last:", numbers[14]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Minimum:", Math.min(...numbers));
console.log("Maximum:", Math.max(...numbers));
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Arrays in JavaScript are resized when you add or remove an element. However, lists in Python are hard to 
// control when having too many elements.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const course = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies",
    units: 1,
    numStudents: 40,
    professor: "Sir Job Lipat"
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

console.log(course.professor)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

const courses = [
    {
        courseCode: "IT114L",
        name: "Web Systems and Technologies Laboratory",
        units: 1,
        professor: "Sir Job"
    },
    {
        courseCode: "IT114",
        name: "Web Systems and Technologies Lecture",
        units: 2,
        professor: "Sir Mark Anthony Hernandez"
    },
    {
        courseCode: "CS107L",
        name: "Information Management Laboratory",
        units: 1,
        professor: "Sir Job"
    },
    {
        courseCode: "CS107",
        name: "Information Management Lecture",
        units: 2,
        professor: "Ms. Dahlia De Mesa"
    },
    {
        courseCode: "IT132L",
        name: "Logic Design and Switching Laboratory",
        units: 1,
        professor: "Sir Leonnel De Mesa"
    },
    {
        courseCode: "IT132",
        name: "Logic Design and Switching Lecture",
        units: 2,
        professor: "Sir Leonnel De Mesa"
    }
]

var first = courses[0]
console.log("Course Code: ", first.courseCode)
console.log("Course Name: ", first.name)
console.log("Course Units: ", first.units)
console.log("Course Professor: ",first.professor)

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

const totalUnits = 0;

for (let i = 0; i < courses.length; i++) {
    totalUnits += courses[i].units;
}

console.log("Total Units: ", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: JavaScript objects are similar to Python dictionaries. Both objects and dictionaries include 
// a key-value pair. 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

const numAdd = [...numbers, 17];

console.log(numAdd)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies Laboratory",
    units: 1,
    professor: "Sir Job"
};

const {courseCode,units} = IT114L

console.log("Course Code:", courseCode);
console.log("Course Units:", units);
