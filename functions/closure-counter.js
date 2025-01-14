//closure example of encapsulation

function createCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(createCounter()); // Output: 1
console.log(counter()); // Output: 2
