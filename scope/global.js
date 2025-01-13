let a = 'global'

function fun() {
    let a = 'function'
    console.log("From function let: " + a)
    console.log("From function pre if var: " + b)

    if (true) {
        let a = 'block'
        var b = 'local hoist'

        console.log("From if: " + a)
        console.log("From if: " + b)
    }

    console.log("From function pre if var: " + b)
}

console.log("From file: " + a)

fun()