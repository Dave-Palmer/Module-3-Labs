




// function truncate(fullString, maxChar) {
//     if (fullString.length > maxChar) {
//         return `${fullString.substring(0, maxChar)}. . . . . readmore`
//     } else return fullString
// }

// console.log(truncate(myString, 12))


// let me = {
//     name: 'Dave',
//     hometown: 'TKU',
//     age: 30,
//     toString() {
//         return `Name: ${this.name}, Hometown: ${this.hometown}, Age: ${this.age}`
//     }
// }

// console.log(`Hello i am ${me}`)


// 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. 
// Test it with different strings.

// function capitalize(str) {
//     return str.charAt(0).toUpperCase()
//         + str.slice(1).toLowerCase();
// }

function ucFirstLetters(string) {
    let newArray = []
    let arr = string.split(' ')
    for (let i of arr) {
        newArray.push(i.charAt(0).toUpperCase() + i.slice(1).toLowerCase() + " ")
    }
    return newArray.join('')
}
console.log(ucFirstLetters("los angeles is in america")) //Los Angeles

// 2. a) Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length.
// It should return either the truncated text, with an ellipsis(...) added to the end if it was too long, or the original text otherwise.
//     b) Write another variant of the truncate function that uses a conditional operator.

let myString = "Hello this is a long string of somesort that doesn't have any useful content, cool eh!!"

let truncate = (str, max) => str.length > max ? str.substring(0, max) + '. . .' : str

// function truncate(fullString, maxChar) {
//     if (fullString.length > maxChar) {
//         return `${fullString.substring(0, maxChar)}. . . . . readmore`
//     } else return fullString
// }

console.log(truncate(myString, 12))

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
// https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Global_Objects/Array
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
// a)
animals.push('Hippo', 'Lion')
// b)
animals.unshift('Rhino', 'Llama')
console.log(animals)
// c)
animals.sort()
console.log(animals)
//d)
function replaceMiddleAnimal(newValue) {
    let splicePoint = animals.length / 2
    animals.splice(splicePoint, 1, newValue)
    console.log(animals)
}

replaceMiddleAnimal('Chicken')

// e)
function findMatchingAnimals(firstLetter) {
    return animals.filter(arrItem => arrItem.toLowerCase().charAt(0) == firstLetter.toLowerCase())
}

console.log(findMatchingAnimals('L'))

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
// b) Create variants of the camelCase function that use different types of for loops, and c) with and without the conditional operator.

// first solution
// function camelCase(cssProp) {
//     let arr = cssProp.split('-')
//     let newArray = []
//     newArray.unshift(arr[0])
//     for (let i = 1; i < arr.length; i++) {
//         newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase())
//     }
//     return newArray.join('')
// }

//second solution
// function camelCase(cssProp) {
//     let arr = cssProp.split('-')
//     let str = ""
//     for (let a of arr) {
//         if (str == "") { str += a } else { str += a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() }
//     }
//     return str
// }

//third solution
function camelCase(cssProp) {
    let arr = cssProp.split('-')
    let str = ""
    for (let a of arr) {
        str == "" ? str += a : str += a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    }
    return str
}


console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image-for-main-page')) // backgroundImage
console.log(camelCase('display')) // display


// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.20
let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTen)
console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Explain why the above code returns the wrong answer
// because toFixed converts the number to a string, therfore two strings are being concatinated 

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
    let addition = (float1 + float2).toFixed(2);
    return parseFloat(addition)
}

console.log(currencyAddition(0.20, 0.10))
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// function currencyOperation(float1, float2, operator, numDecimals) {
//     let result = null;
//     if (operator == 'add') { result = (float1 + float2).toFixed(numDecimals) }
//     else if (operator == 'subtract') { result = (float1 - float2).toFixed(numDecimals) }
//     else if (operator == 'multiply') { result = (float1 * float2).toFixed(numDecimals) }
//     else if (operator == 'divide') { result = (float1 / float2).toFixed(numDecimals) }
//     return parseFloat(result)
// }

function currencyOperation(float1, float2, operator, numDecimals) {
    let result = null;
    switch (operator) {
        case 'add': result = (float1 + float2).toFixed(numDecimals);
            break;
        case 'subtract': result = (float1 - float2).toFixed(numDecimals);
            break;
        case 'multiply': result = (float1 * float2).toFixed(numDecimals);
            break;
        case 'divide': result = (float1 / float2).toFixed(numDecimals);
        default: return 'Not a valid operator'
    }
    return parseFloat(result)
}


console.log('\n')
console.log(currencyOperation(0.20234, 0.105321, 'add', 4))
// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below:



console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. 
// Your function should return an array containing only the unique values from duplicatesArray.

const unique = (duplicatesArray) => {
    return [...new Set(duplicatesArray)]
}

// const unique = (duplicatesArray) => {
//     duplicatesArray.filter((c, index) => {
//         return duplicatesArray.indexOf(c) === index
//     })
// }


// Test with the following arrays and create another one of your own.

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const doubleCars = ['Toyota', 'Honda', 'Jaguar', 'Subaru', 'Nissan', 'Honda', 'Jaguar']
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(doubleCars))

// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'H.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

const getBookTitle = (bookId) => {
    let book = books.find(element => element.id == bookId)
    return book.title
}

console.log(getBookTitle(4))

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

const getOldBooks = () => books.filter(book => book.year < 1950)

console.log(getOldBooks())

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
const addGenre = () => books.map(book => book.genre = 'classic')

addGenre()
console.log(books)
console.log('BREAK \n')

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
const getTitles = (authorInitial) => {
    let titles = books.filter(book => book.author.charAt(0) == authorInitial);
    return titles.map(b => b.title)
}
console.log(getTitles('H'))

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
const latestBook = () => {
    let b = null
    books.forEach((book) => { if (book.year > b) { b = book.year } })
    return books.find(bookYear => bookYear.year == b)
    // return books.find(ele => ele.id == youngestBook)
}

console.log(latestBook())