
//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(person3.pizza[0])

console.log(Object.keys(person3))

for (let key in person3){
    console.log(person3[key])
}

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

class Person {
    constructor(names,age){
        this.names = names
        this.age = age
    }
    printInfo(){
        return `${this.names} is ${this.age} years old`
    } 
    addAge(){
        return this.age++
    }
   
    
}
const lady = new Person("michelle", 63)
const guy = new Person ("barack",65)
console.log(lady.printInfo())
console.log(lady.addAge())
console.log(lady.addAge())
console.log(lady.addAge())
console.log(lady.printInfo())
console.log(guy.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


//  ============= Exercise #3 ============

//     Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
//     handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.



const ergastData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
}

ergastData()

fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
.then((response) => {
    console.log(response.status)
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error(error)
})
