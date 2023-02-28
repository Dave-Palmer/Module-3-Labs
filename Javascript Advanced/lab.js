// 1. Arecountersindependent?
// Module 3 Labs JS Advanced
// Here we make two counters: counter and counter2 using the same makeCounter function.
// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

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


// 2. Set and decrease counter ?
//     Modify the code of makeCounter() so that the counter can also decrease and set the number:
//
// counter() should return the next number(as before).   <<<<<<<< Not working
// counter.set(value) should set the counter to value.   <<<<<<<< This works
// counter.decrease() should decrease the counter by 1.  <<<<<<<< This works

function makeCounter() {
    let count = 0;
    function changeBy(val) {
        count += val
    }
    return {
        decrease() {
            changeBy(-1);
            return count
        },
        set(valu) {
            count = valu;
            return count
        }

    }
}

let counter = makeCounter();
let counter2 = makeCounter();



//To work with modified function as per question 2.
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.set(14))
console.log(counter.set(50))
// console.log(counter())  <<<<<< This here doesn't work with the modified function


// See the sandbox code for the complete usage example.
// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.


// 3. Outputeverysecond
// Write a function printNumbers(from, to) that outputs a number every second, starting
// from from and ending with to. Make two variants of the solution.
// 1. Using setInterval  .

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

// 2. Using nested setTimeout
function printNumbersTwo(from, to, interval) {
    let num = from
    setTimeout(function repeat() {
        console.log(num); num++; if (num <= to) { setTimeout(repeat, interval) }
    }, interval)
}


printNumbersTwo(1, 7, 500)






