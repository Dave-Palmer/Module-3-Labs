// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

const printFibonacci = function (countAmount) {
    let n1 = 1
    let n2 = 1
    let nextNum = 1
    let addCounter = 0
    function adding() {
        console.log(n1)
        nextNum = n1 + n2
        n1 = n2
        n2 = nextNum
        addCounter++
        if (addCounter == countAmount) { clearInterval(interval) }
    }
    let interval = setInterval(adding, 1000)
}


printFibonacci(4)