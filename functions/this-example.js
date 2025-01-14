//global

function whatIsThis() {
    console.log(this)
}

//attached to an object using arrow syntax, making the function call anonymous

const person = {
    whatIsThis: () => {
        console.log(this)
    }
}

