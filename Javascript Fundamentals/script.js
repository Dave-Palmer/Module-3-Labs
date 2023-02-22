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

// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    numberOfFouls: 0,
    freeThrow() {
        this.score++;
        return this
    }, basket() {
        this.score += 2;
        return this
    },
    threePointer() {
        this.score += 3;
        return this
    },
    foul() {
        this.numberOfFouls++;
        return this
    },
    halfTime() {
        return console.log('Halftime score is ' + this.score + ' the number of fouls is ' + this.numberOfFouls);

    },
    fullTime() {
        return console.log('Fulltime score is ' + this.score + ' the number of fouls is ' + this.numberOfFouls);

    }
}
//modify each of the above object methods to enable function chaining as below:

// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

basketballGame.basket().freeThrow().freeThrow().basket().foul().foul().threePointer().basket();
console.log(basketballGame.fullTime())
console.log(basketballGame.halfTime())


// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const auckland = {
    name: 'Auckland City',
    population: 1_657_000,
    state: '',
    founded: '06 February 1840',
    timezone: 'Auckland (GMT+13)'
}

function objectLoop(object) {
    for (let obj in object) {
        console.log(`${obj}: ${object[obj]}`)
    }
}

objectLoop(sydney)
objectLoop(auckland)

// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let dog2 = dog1
let cat2 = { ...cat1 }

// let moreSports = teamSports
let moreSports = [...teamSports]

dog2 = 'Bruce'
cat2.name = 'Terry'

moreSports.push('Rugby', 'Soccer')
moreSports.unshift('Tennis', 'Basketball')

console.log(moreSports)

console.log(teamSports)

console.log(dog1)

console.log(dog2)

console.log(cat1)

console.log(cat2)

// 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = age > 16 ? true : false
}

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = age >= 16 ? true : false
    }
}

const personOne = new Person('Dave', 15)
const personTwo = new Person('Cam', 29)
const personThree = new PersonClass('Brad', 54)

console.log(personOne)
console.log(personTwo)
console.log(personThree)


// Extension: If you have time, try the JS Challenge Rush at https://www.jschallenger.com/games/rush

