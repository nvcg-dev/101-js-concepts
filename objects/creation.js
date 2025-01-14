//object creation using braces

const cat = {

    //defining cat object properties and values
    color: 'black',
    name: 'Max',
    born: Date.now(),
    scratch() {
        console.log('ouch')
    }
}

//object creation using constructor

const dog = new Object()

//prototype chains link copies to one prototype

dog.__proto__.__proto__
//or
Object.getPrototypeOf(dog)

class Dog {
    constructor(name) {
        this.goodBoy = 'yes'
        this.name = name
    }

    //getter setters
    get gender() {
        return this.gender
    }

    set gender(val) {
        this.gender = val
    }

    //instance method
    bark() {
        console.log('woof')
    }

    //global to class name using static
    static isGoodBoy(goodBoy){
        if (dog.goodBoy == yes) {
            return true
        }
    }
}