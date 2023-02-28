function addSomething(num1, num2, message) {
    console.log(`${num1 + num2} is your two numbers added together at ${message} second(s)`)
}

// const calcOne = setTimeout(addSomething, 4000, 1, 3, 'four')
// const calsTwo = setTimeout(addSomething, 2000, 1, 1, 'two')
// const calcThree = setTimeout(addSomething, 8000, 5, 3, 'eight')

const plusOne = () => {
    let num = 0;
    return function () {
        num++;
        console.log(num)
    }
}

const counting = plusOne()


// const interval = setInterval(addSomething, 1000, 3, 7, 'one')
const interval = setInterval(counting, 1000)
// setTimeout(() => clearInterval(interval), 7500)


// Using intervalTimer to print numbers
const printNumbers = (from, to, interval) => {
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

// Using nested setTimeout
const printNumbersTwo = (from, to, interval) => {
    let num = from
    setTimeout(function repeat() {
        console.log(`function has repeated ${num} of ${to} times`); num++; if (num <= to) { setTimeout(repeat, interval) }
    }, interval)
}


// printNumbersTwo(1, 7, 500)
