// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists


const myFunction = function (a, b) {
    for (let prop in a) {
        if (prop == b) { return true }
    } return false
}

// myFunction({ a: 1, b: 2, c: 3 }, 'b')
// Expected
// true
// myFunction({x:'a',y:'b',z:'c'},'a')
// Expected
// false
// myFunction({x:'a',y:'b',z:undefined},'z')
// Expected
// true

// let result = function () {
//     for (let myObject
// }

console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'a'))