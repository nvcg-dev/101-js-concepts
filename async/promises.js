//promises example, wrapper for currently unknown values
const promise = new Promise(
    (resolve, reject) => {
        
        // something async goes here

        if(successful) {
            resolve('success')
        } else {
            reject('failure')
        }

    }
)

//how to receive the promise
promise.then(success => {
    console.log('rejoice', success)
})

//or

promise.catch(err => {
    console.log('aww :(', err)
})