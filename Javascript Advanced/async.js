// import { reject } from 'async'
import fetch from 'node-fetch'
// import { resolve } from 'path'


function produceSong(resolve, reject) {
    const artists = ['Taylor Swift', 'Beyonce', 'Drake', 'Ed Sheeran', 'Rihanna', 'The Weeknd', 'Harry Styles']
    const randomArtist = Math.floor(Math.random() * artists.length) //random number corresponding to one of the above artists

    const songs = ['Unstoppable', 'Numb Little Bug', 'About Damn Time', 'Music For a Sushi Restaurant', 'Anti-Hero', 'Glimpse of Us']
    const randomSong = Math.floor(Math.random() * songs.length) //random number corresponding to one of the above songs

    const randomOutcome = Math.round(Math.random()) //returns either 0 or 1 randomly for failure (0) or success (1)

    let successResult = artists[randomArtist] + ' has just released their newest song called ' + songs[randomSong]
    let failResult = artists[randomArtist] + ' has no new songs'

    setTimeout(() => randomOutcome ? resolve(successResult) : reject(failResult), 1000)

    //a longhand version of the above setTimeout, without arrow functions or conditional statements:
    //setTimeout(function() {
    //    if (randomOutcome == 1) resolve(successResult) //calls the resolve callback to indicate successful promise resolution, native to promise producer functions
    //    else reject(failResult) //calls the reject callback to indicate failed promise resolution, native to promise producer functions
    //}, 1000)
}
// try doing .then, .catch and .finally

// let songPromise = new Promise(produceSong)

// let randomTestFunction = () => {
//     console.log('Random test function ')
// }

// let randomTestFunction2 = (msg) => {
//     console.log('This is a test function for finally ' + msg)
// }

// songPromise
//     .then((success) => randomTestFunction(), console)
//     .catch((hi) => { console.log(hi) })
//     .finally(() => randomTestFunction2("Llama's!!!!!!"))

// songPromise.then(null, isFaliure => { console.log(`${isFaliure}`) }) //This example is only worried about the 'faliure' response of the promise 


// fetch('https://jsonplaceholder.typicode.com/posts/10') //sample public JSON API for use in testing
//     .then(response => response.json()) //this gets the entire HTTP response, so we use the .json() function which also returns a promise
//     .then(json => console.log(`Post #10: ${json.title}`)) //this promise includes the json returned from the fetched URL if successful
//     .catch(error => console.error(`Caught error: ${error}`)) //can optionally include this to show any errors
//     .finally(() => console.log('done fetching')) //can optionally include this after all fetching done

//     try and get both fetch.then and await fetch type syntaxes working

// create a function similar to fetchPostTitle that grabs the body of a particular post

// let wholeResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1')
// // console.log(wholeResponse)

// async function fetchPostBody() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/7')
//     let jsonify = await response.json()
//     console.log(jsonify.userId + " " + jsonify.body)
// }

// fetchPostBody()

// function start() {
//     console.log('Started making pizza');
//     setTimeout(makeBase, 1000, addCheese, addToppings, pizzaIsHeating, pizzaReady)
// }
// function makeBase() {
//     console.log('preparing the base')
// }
// function addCheese() {
//     console.log('adding the cheese to the base')
// }
// function addToppings() {
//     console.log('adding some yum as toppings')
// }
// function pizzaIsHeating() {
//     console.log('Pizza is in the oven')
// }
// function pizzaReady() {
//     console.log('Your pizza is ready, yay!!!')
// }


function start() {
    return new Promise(resolve => setTimeout(() => { console.log('started making pizza'); resolve(makeBase) }, 1000))
}
function makeBase() {
    return new Promise(resolve => setTimeout(() => { console.log('Base is ready'); resolve(addCheese) }, 1000))
}
function addCheese() {
    let cheeseInStock = Math.floor(Math.random() * 10)
    return new Promise((resolve, reject) => {
        if (cheeseInStock >= 5) { setTimeout(() => { console.log('added the cheese yo'); resolve(addToppings) }, 1000) }
        else { setTimeout(() => { console.log("You don't have enough cheese, pizza is no good without cheese!"); reject('Not enough cheese') }, 1000) }
    })
}

function addToppings() {
    return new Promise(resolve => setTimeout(() => { console.log('added some yum as toppings'); resolve(pizzaIsHeating) }, 1000))
}
function pizzaIsHeating() {
    return new Promise(resolve => setTimeout(() => { console.log('pizza is in the oven'); resolve(pizzaReady) }, 1000))
}
function pizzaReady() {
    return new Promise(resolve => setTimeout(() => resolve(console.log('your pizza is ready yay!!!!')), 3000))
}


start()
    .then(action => action())
    .then(action => action())
    .then(action => action())
    .then(action => action())
    .then(action => action())
    .catch(errMsg => console.log(`Bad pizza: ${errMsg}`))
// makeBase()
// addCheese()
// addToppings()
// pizzaIsHeating()
// pizzaReady()

