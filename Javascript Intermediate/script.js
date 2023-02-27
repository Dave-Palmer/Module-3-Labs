




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

// 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map()
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
phoneBookDEF.set('Dave', '021123456')
phoneBookDEF.set('Ezra', '021987654')
phoneBookDEF.set('Freddy', '021456789')

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0512398711')
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
const printPhoneBook = (contacts) => {
    for (let contact of contacts) {
        console.log(contact)
    }
}
printPhoneBook(phoneBookDEF)
// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBookMap = new Map([...phoneBookABC, ...phoneBookDEF])
// f) Print out the full list of names in the combined phone book
console.log(phoneBookMap)

// 9. Given the below salaries object, perform the following tasks.
let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000,
    "Janet": 40000,
    "Bruce": 37000,
    "Shelly": 80000
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
const sumSalaries = (obj) => {
    let totalSalaries = 0
    for (let salary in obj) {
        totalSalaries += obj[salary]
    } return totalSalaries
}
console.log(sumSalaries(salaries))

// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary
const topEarner = (obj) => {
    let top = ""
    let currentTop = 0;
    for (let salary in obj) {
        if (obj[salary] > currentTop) { top = salary; currentTop = obj[salary] }
    } return top
}
console.log(topEarner(salaries))

// 10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a) Print the total number of minutes that have passed so far today

console.log((today.getHours() * 60) + today.getMinutes() + ' minutes have passed so far today')

// b) Print the total number of seconds that have passed so far today

console.log(((today.getHours() * 60) * 60) + today.getSeconds() + ' seconds have passed so far today')

// c) Calculate and print your age as: 'I am x years, y months and z days old'
const dob = new Date("1992-04-22")

const dobYear = dob.getYear();
let dobMonth = dob.getMonth();
let dobDate = dob.getDate();

let currentYear = today.getYear();
let currentMonth = today.getMonth();
let currentDate = today.getDate();

//declare a variable to collect the age in year, month, and days  
let age = {};
let ageString = "";

let yearAge = null
//get years  
yearAge = currentYear - dobYear;
//get months  
let monthAge = null
if (currentMonth >= dobMonth)
//get months when current month is greater  
{ monthAge = currentMonth - dobMonth }
else {
    yearAge--;
    monthAge = 12 + currentMonth - dobMonth;
}

let dateAge = null
//get days  
if (currentDate >= dobDate)
//get days when the current date is greater  
{ dateAge = currentDate - dobDate }
else {
    monthAge--;
    dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
    }
}
//group the age in a single variable  
age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
    toString() {
        return `I am ${this.years} years, ${this.months} months, and ${this.days} days old`
    }
};
console.log('' + age)

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

const daysInBetween = (date1, date2) => {
    let dateOne = new Date(date1)
    let dateTwo = new Date(date2)
    let difference = dateTwo.getTime() - dateOne.getTime()
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24))
    return `There is ${Math.abs(totalDays)} days differnce between those two dates`
}

console.log(daysInBetween('2023/02/27', '04-22-2023'))