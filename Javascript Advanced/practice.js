// function addSomething(num1, num2, message) {
//     console.log(`${num1 + num2} is your two numbers added together at ${message} second(s)`)
// }

// // const calcOne = setTimeout(addSomething, 4000, 1, 3, 'four')
// // const calsTwo = setTimeout(addSomething, 2000, 1, 1, 'two')
// // const calcThree = setTimeout(addSomething, 8000, 5, 3, 'eight')

// const plusOne = () => {
//     let num = 0;
//     return function () {
//         num++;
//         console.log(num)
//     }
// }

// const counting = plusOne()


// // const interval = setInterval(addSomething, 1000, 3, 7, 'one')
// // const interval = setInterval(counting, 1000)
// // setTimeout(() => clearInterval(interval), 7500)


// // Using intervalTimer to print numbers
// const printNumbers = (from, to, interval) => {
//     let numberOutput = from
//     let intervalTimer = setInterval(() => {
//         if (numberOutput <= to) {
//             console.log(numberOutput)
//             numberOutput++
//         } if (numberOutput > to) {
//             clearInterval(intervalTimer)
//         }
//     }, interval)
// }

// // printNumbers(3, 7, 1000)

// // Using nested setTimeout
// const printNumbersTwo = (from, to, interval) => {
//     let num = from
//     setTimeout(function repeat() {
//         console.log(`function has repeated ${num} of ${to} times`); num++; if (num <= to) { setTimeout(repeat, interval) }
//     }, interval)
// }


// // printNumbersTwo(1, 7, 500)

// function slow(x) {
//     // there can be a heavy CPU-intensive job here like adding up to a large number
//     let goal = Math.floor(Math.random() * x * 1_000_000) //random number between 0 and a million times x
//     console.log(`slow(${x}: randomly generated goal for ${x * 1_000_000} is ${goal}`)
//     let random = 0;
//     for (let i = 0; i < goal; i++) {
//         random++
//     }
//     return random;
// }

// function cachingDecorator(pureFunction) {
//     const cache = new Map();
//     // const outerContext = this;

//     return function () {
//         // let x = arguments[0];
//         let funcParams = Array.from(arguments).join('')
//         if (cache.has(funcParams)) { // if there's such key in cache
//             console.log('returned cached value for ' + funcParams)
//             return cache.get(funcParams); // read the result from it
//         }
//         // let result = pureFunction.call(this, ...arguments); //needed for object functions that reference 'this' for context
//         let result = pureFunction.apply(this, arguments); //can also use apply - very similar, only difference is in handling arguments
//         // let result = pureFunction(x) //works fine for standalone functions that don't rely on 'this' for context
//         cache.set(funcParams, result); // and cache (remember) the result
//         console.log('generated new value ' + result + ' for ' + funcParams)
//         return result;
//     };
// }

// slow = cachingDecorator(slow)

// // 1. change the number of argument to slow

// // console.time('slow no caching')
// // console.log(slow(4)); // slow(1) is run, cached and the result returned
// // console.timeEnd('slow no caching')

// // console.time('slow with caching')
// // console.log("Again: " + slow(4)); // slow(1) result returned from cache
// // console.timeEnd('slow with caching')

// // console.time('slow with caching')
// // console.log("Again: " + slow(2)); // slow(1) result returned from cache
// // console.timeEnd('slow with caching')

// // console.time('slow with caching')
// // console.log("Again: " + slow(4)); // slow(1) result returned from cache
// // console.timeEnd('slow with caching')


// // Getters and setters

// // let newUser = {

// //     get name() {
// //         return this._name;
// //     },

// //     set name(value) {
// //         if (value.length < 4) {
// //             console.log("Name is too short, need at least 4 characters");
// //             return;
// //         }
// //         this._name = value;
// //     },

// //     set age(value) {
// //         if (value > 120) {
// //             console.log("You are too old")
// //             return;
// //         }
// //         if (value < 0) {
// //             console.log("A negative number is invalid")
// //             return;
// //         }
// //         if (typeof value != Number) {
// //             console.log("Please enter a number")
// //         }


// //         this._age = value
// //     }
// // };

// // newUser.name = 'Dave'
// // newUser.age = "12"

// // console.log(newUser)


// //create 2 new types of animal based on the animal prototype - one using Object.create (like rabbit), and one using an F.prototype (like cat)

// let animal = {
//     eats: true,
//     sleeps: true,
//     legs: 4,
//     mammal: true
// };

// let llama = Object.create(animal, {
//     spits: {
//         value: true,
//         enumerable: true
//     },
//     safeToApproach: {
//         value: "probably not",
//         enumerable: true
//     }
// })

// console.log(llama.eats)
// console.log(llama.spits)
// console.log(llama)

// for (let props in llama) {
//     console.log(`LLamas properties ${props} = ${llama[props]}`)
// }

// console.log('\n Next prototype practice \n')

// function Hippo(name, likesWater, isLarge) {
//     this.likesWater = likesWater
//     this.largeAnminl = isLarge
//     this.name = name
// }

// Hippo.prototype = animal;
// const hippo = new Hippo('Bruce', true, true)

// console.log(hippo)

// for (let property in hippo) {
//     console.log(`${property} = ${hippo[property]}`)
// }

// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//         this.type = 'animal'
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed of ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }

// class Sloth extends Animal {
//     constructor(name, speed) {
//         super(name)
//         this.motion = speed
//     }

//     speak() {
//         console.log(`Heeeeellllllooooooo myyyyyyy naaaaaaaaaaaaame iiiiis ${this.name}`)
//     }
// }

// let sloth = new Sloth('Janet', 'slow')

// console.log(sloth.motion)
// sloth.run('0.004km/h')
// sloth.speak()
// sloth.stop()


//write a function checkDate, similar to above, that throws an error if the date is parsed as invalid and implements catch/finally
// const testDate = new Date('this is not a date')
// console.log(testDate) //Invalid Date
// console.log(testDate == 'Invalid Date')

function checkDate(date) {

    try {
        const goodDate = new Date(date)
        if (goodDate == 'Invalid Date') {
            throw new SyntaxError('not a good date')
        }
        console.log('This will be true')
        return true;
    } catch (e) {
        if (e instanceof SyntaxError) {
            console.log(e.message)
            // console.log(e)
            // throw e
        }
    }
    finally {
        console.log('We made it to the end!!')
    }
    return false

}

// console.log(checkDate('2023-03-03'))
// console.log(checkDate('Naaaa'))


