// const productBike = {
//     name: 'remedy 8',
//     make: 'trek',
//     year: 2023,
//     price: 3000,
//     gst: 15,
//     summerDiscount: 20,
//     valueOf() {
//         return this.price + (this.price * (this.gst / 100) - (this.price * this.summerDiscount / 100))
//     }
// }

// console.log(productBike.valueOf())

let citiesArray = ['Auckland', 'Hamilton', 'Tauranga', 'Wellington', 'Nelson']
let moreCities = ['Christchurch', 'Dunedin', 'Invercargill', 'Queenstown']



const people = [
    { firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD' },
    { firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW' },
    { firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC' },
    { firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ' },
    { firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD' },
]

people.forEach((p, index) => console.log(`${index} Hello ${p.firstName} ${p.lastName} i've heard you are ${p.age} years old and you're from ${p.location}\n`))

let sPerson = people.filter(person => person.firstName.charAt(0) == 'S')

console.log(sPerson)

// let olderPeople = people.map(person => person.age += 1)
let areOldPeople = people.map(person => person.age > 38)

console.log(areOldPeople)
// compare and sort pople by age(youngest to oldest)
people.sort((p1, p2) => {
    if (p1.age == p2.age) { return 0 };
    if (p1.age > p2.age) { return 1 }
    else { return -1 }
})

console.log(people)

