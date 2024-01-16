// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

function isPalindrome(word) {
    const reverse = word.toLowerCase().split('').reverse().join('')
    return word.toLowerCase() === reverse
}

var sample = "hello"

console.log("Is",sample,"a palindrome?",isPalindrome(sample))

  
// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

module.exports = isPalindrome