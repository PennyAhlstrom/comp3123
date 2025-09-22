
function getPromise(x) {
    let myPromise = new Promise((resolve, reject) => {
        if (x > 10) {
            resolve(`Promise resolved sucessfully: ${x}`);
        } else {
            reject('Promise rejected: x is not greater than 10');
        }
    })

    return myPromise;
}


// Promise consumption
getPromise(5).then((message) => {
    console.log(message);
}, (error) => {
    console.log(error);
});

// Another way to handle rejection using .catch()
getPromise(15)
    .then((message) => {    //This will run if the promise is resolved (success)
        console.log(message);
    })
    .catch((error) => {     //This will run if the promise is rejected
        console.log('Caught an error:', error);
    })
    .finally(() => { // This will run if the promise is rejected or resolved
        console.log('Promise has been settled (either resolved or rejected)')
    });

// Promise chaining
getPromise(20)
    .then((message) => {
        console.log(message);
        return getPromise(15); // Returning another promise
    })
    .then((message) => {
        console.log('Chained promise resolved:', message);
    })
    .catch((error) => {
        console.log('Error in chained promises:', error);
    });

    // Promise .all() Parallel execution - only if all promises succeed
    Promise.all([getPromise(12), getPromise(15), getPromise(8)])
    .then((messages) => {
        console.log('All promises resolved:', messages);
    })
    .catch((error) => {
        console.log('One of the promises rejected:', error);
    });

// Promise Race - First to settle
Promise.race([getPromise(5), getPromise(25), getPromise(8)])
    .then((response) => {
        console.log('First promise settled:', response);
    })
    .catch((error) => {
        console.log('First promise rejected:', error);
    });
