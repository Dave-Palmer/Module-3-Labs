// 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

function makeCounter(startFrom, incrementBy = 1) {
    let currentCount = startFrom;
    let increment = incrementBy
    return function () {
        currentCount += increment;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(3, 1);
let counter2 = makeCounter(10, 10)
// counter1(); // 1
// counter1(); // 2
// counter2(); // 1
// counter2(); //2


// !!!!FROM OLD PDF!!!!
// 1. Arecountersindependent?
// Module 3 Labs JS Advanced
// Here we make two counters: counter and counter2 using the same makeCounter function.
// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

// const { setUncaughtExceptionCaptureCallback } = require("process");

//ORIGINAL FUNCTION

// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
// }; }

//To work with original function
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter2()); // 0
// console.log(counter2()); // 1


//  Set and decrease counter ?
//     Modify the code of makeCounter() so that the counter can also decrease and set the number:
//
// counter() should return the next number(as before).   <<<<<<<< Not working
// counter.set(value) should set the counter to value.   <<<<<<<< This works
// counter.decrease() should decrease the counter by 1.  <<<<<<<< This works

// function makeCounter() {
//     let count = 0;
//     function changeBy(val) {
//         count += val
//     }
//     return {
//         decrease() {
//             changeBy(-1);
//             return count
//         },
//         set(valu) {
//             count = valu;
//             return count
//         }

//     }
// }

// let counter = makeCounter();
// let counter2 = makeCounter();



//To work with modified function as per question 2.
// console.log(counter.set(14))
// console.log(counter.set(50))
// console.log(counter())  <<<<<< This here doesn't work with the modified function


// See the sandbox code for the complete usage example.
// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

// 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

let delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// let messageNoShow = setTimeout(delayMsg, 11 * 1000, '#5; Delayed by 11s')
// clearTimeout(messageNoShow)

// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests.
// See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.

function printMe(msg = "yo this is a default message") {
    console.log(`printing debounced message ${msg}`)
}

const debounce = (func, ms) => {
    let timer;
    let myFunc = func
    return function (msg) {
        clearTimeout(timer)
        timer = setTimeout(myFunc, ms, msg)
    }
}


printMe = debounce(printMe, 400); //create this debounce function for a)
// fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// 1000ms of no calls

// setTimeout(printMe, 1000);
// setTimeout(printMe, 1500, 'test')
// setTimeout(printMe, 2000, 'hello');






//!!!!FROM FIRST PDF!!!!

// 3. Outputeverysecond
// Write a function printNumbers(from, to) that outputs a number every second, starting
// from from and ending with to. Make two variants of the solution.
// a) Using setInterval  .

function printNumbers(from, to, interval) {
    let numberOutput = from
    let intervalTimer = setInterval(() => {
        if (numberOutput <= to) {
            console.log(numberOutput)
            numberOutput++
        } if (numberOutput > to) {
            clearInterval(intervalTimer)
        }
    }, interval)
}

// printNumbers(3, 7, 1000)

// b) Using nested setTimeout
function printNumbersTwo(from, to, interval) {
    let num = from
    setTimeout(function repeat() {
        console.log(num); num++; if (num <= to) { setTimeout(repeat, interval) }
    }, interval)
}


// printNumbersTwo(1, 7, 500)



// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

const printFibonacci = (limit) => {
    let n1 = 1
    let n2 = 1
    let limitCounter = 0
    function numAdd() {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        limitCounter++;
        // console.log(limitCounter)
        if (limitCounter == limit) { clearInterval(int) }
    }
    let int = setInterval(numAdd, 1000)
}

// printFibonacci(5)

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

// function printFibonacci(limit) {
//     let n1 = 1
//     let n2 = 1
//     limitCounter = 1
//     setTimeout(function repeat() {
//         console.log(n1); nextNum = n1 + n2; n1 = n2; n2 = nextNum; limitCounter++; if (limitCounter <= limit) {
//             setTimeout(repeat, 1000)
//         }
//     }, 1000)
// }

// printFibonacci(4)

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.



// 5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
// b) Change the year for the car by creating a clone of the original and overriding it
// b)? Why?
// c) Does the delayed description() call use the original values or the new values from
// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
// car.description(); //works
let boundCarDescricption = car.description.bind(car)

// setTimeout(car.description, 1000); //fails
//a)
// setTimeout(() => car.description(), 2000);
//b)
// car = { ...car, year: 1940 }
//c) The delayed description takes on the new value, as it is changed in the script before it is executed
//d)
// setTimeout(car.description.bind(car), 3000);
car = { ...car, year: 1940 } // if this is declared before the setTimeOut it will affect the result, but if it is declared during the time out it will not
//e)
car = { ...car, model: 718 }


// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}
// a)

// Function.prototype.delay = function (ms) {
//     let ofunc = this
//     return function (arg1, arg2) {
//         console.log(arg1, arg2)
//         setTimeout(ofunc, ms, arg1, arg2)
//     }
// }

Function.prototype.delay = function (ms) {
    let ofunc = this
    return function () { setTimeout(() => ofunc.apply(null, arguments), ms) }
}

multiply.delay(1000)(5, 5, 100, 5); // prints 25 after 500 milliseconds


// 7. In JavaScript, the toString method is used to convert an object to a string representation.By default, when an object is converted to a String, it returns a string that looks something like[object Object].
// However, we can define our own toString methods for custom objects to provide a more meaningful string representation.
//     a) Define a custom toString method for the Person object that will format and print their details
// b) Test your method by creating 2 different people using the below constructor function and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
// d) Add a custom toString for Student objects that formats and prints their details.Test with 2 students.

function Person(name, age, gender) {

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = () => { return `${this.name} ${this.age} ${this.gender}` }
}

const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Jimmy Tebb', 55, 'male')
const person3 = new Person('Janet Sloth', 43, 'female')
// console.log('person1: ' + person1) //prints person1: [object Object]
// console.log('person2: ' + person2) //prints person1: [object Object]
// console.log('person3: ' + person3) //prints person1: [object Object]

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender)
    this.cohort = cohort;
    this.toString = () => { return `${this.name} ${this.age} ${this.gender} cohort: ${cohort}` }
}

const student1 = new Student('Sally', 21, 'Female', 'Software Engineering')
const student2 = new Student('Steffan', 30, 'Male', 'Cyber Security')

// console.log('Student1: ' + student1)
// console.log('Student2: ' + student2)


// 8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. 
// This precision parameter should default to 1 second if not supplied.
// b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. 
// When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
// myClock.start()

// setTimeout(() => myClock.stop(), 5000)

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix)
        this.precision = precision
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }

}

// class AlarmClock extends DigitalClock {
//     constructor(prefix, alarm = '07:00') {
//         super(prefix)
//         this.alarm = alarm
//     }
//     display() {
//         super.display() //this inherits the 'display' function 

//     }
// }

class AlarmClock extends DigitalClock {
    constructor(prefix, alarm = '07:00') {
        super(prefix)
        this.alarm = alarm
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        let alarmCompare = [hours, mins].join(':')
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
        if (alarmCompare == this.alarm) { console.log('Wake up!'); this.stop() }
    }
}

const preciseClock = new PrecisionClock('precise clock', 3000)
// console.log(preciseClock.precision)
// preciseClock.start()

const alarmClock = new AlarmClock('alarm clock', '17:41')

// alarmClock.start()


// 9. 
// We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    return new Promise((resolve, reject) => {
        if (randomNum % 2 == 0) { setTimeout(() => { resolve('Sorry, that took ' + randomNum + ' seconds!!') }, randomNum * 1000) }
        else { setTimeout(() => { reject("Rejected!! That number wasn't even even bro. It was " + randomNum) }, randomNum * 1000) }
    })
}
// randomDelay()
//     .then((msg) => console.log('There appears to have been a delay. Resolve message = ' + msg))
//     .catch((err) => console.log(err))


// let randomNum = () => { console.log(Math.floor(Math.random() * 20) + 1) }
// setInterval(randomNum, 100)

// 10. 
// Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch

// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);
//         }
//     });
//     return fetchPromise;
// }

async function fetchURLData(url) {
    let fetchPromise = await fetch(url)
    let fetchedJson = await fetchPromise.json()
    console.log(fetchedJson.title)
}


// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// fetchURLData('https://jsonplaceholder.typicode.com/posts/7')


// .then(data => console.log(data))
// .catch(error => console.error(error.message));

async function fetchPostBody() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/7')
        let jsonRes = await response.json()
        console.log(jsonRes.userId + " " + jsonRes.body)
    }
    catch (err) { console.log('Oh dear an error', err) }
}

// fetchPostBody()

function fetchMultipleURLData(urls) {

    return Promise.all(urls.map(url => fetch(url).then(response => {
        if (response.status === 200) { return response.json(); }
        else { throw new Error(`Request failed with status ${response.status}`); }
    })));
}

fetchMultipleURLData(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'])
    .then(jsonData => { console.log(jsonData) })
    .catch(err => console.log("Oh noo! an error", err))
