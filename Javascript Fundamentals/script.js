//Question 1
// What are the results of the folllowing expressions?

//String of 10
// "" + 1 + 0
//String of -1?
// "" - 1 + 0
//1
// true + false
//False
// !true
//2 as a number
// 6 / "3"
//6 as a number
// "2" * "3"
//45px as string
// 4 + 5 + "px"
//$45 as a string
// "$" + 4 + 5
//2 as a number
// "4" - 2
//NaN as a number
// "4px" - 2
// -95 as a string (due to spaces and the minus symbol)
// "  -9  " + 5
//the result was -14 as a number
// "  -9  " - 5
//NaN
//The result was 1 as a number
//NaN
// undefined + 1
//true
// undefined == null
//false
// undefined === null
/*Result is -2, \t creates space and \n creates a new line 
but doesn't make a string, therefor the the result is -2*/
// " \t \n" - 2

// console.log(" \t \n" - 2)

// let whatIsThis = " \t \n" - 2

// console.log(typeof (whatIsThis))

/*2. Which of the below are not giving the right answer? 
Why are they not correct? How can we fix them*/

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
// result is 34
let multiplication = three * four
//result is 12
let division = three / four
//result is 0.75
let subtraction = three - four
//result is -1
let lessThan1 = three < four
//result is true
let lessThan2 = thirty < four
//result is true, because it is comparing locale value of the first character I think

console.log(lessThan2)

console.log(thirty.localeCompare(four))

//3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true')
// 0 has a falsey value
if ("0") console.log('#2 zero is true')
//if a string is not empty is has a truthy value
if (null) console.log('null is true')
//null is falsey
if (-1) console.log('negative is true')
// -1 has a truthy value
if (1) console.log('positive is true')
// 1 has a truthy value

/*4. Rewrite this if using the ternary/conditional operator '?'.
Test it with different values for a and b. 
What does the ‘+=’ do? */
// the += adds onto the variable rather than replace it's content/value

let a = 5, b = 6;
let result = `${a} + ${b} is `;
a + b < 10 ? result += 'less than 10' : result += 'greater than 10';

console.log(result)


//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }

// let getGreeting = function (name) {
//     return 'Hello ' + name + '!'
// }

getGreeting = (name) => 'hello ' + name + '!'

console.log(getGreeting('Dave'))

/*6. a) Complete the inigo object by adding a lastName property
 and including it in the greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers,
 it instead prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
*/

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers >= 6 ? 'You killed my father. Prepare to die!' : 'Nice to meet you.'
}
inigo.greeting(westley)
inigo.greeting(rugen)

