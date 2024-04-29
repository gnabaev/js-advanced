Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            Promise.resolve(promise).then(result => resolve(result), error => reject(error));
        }
    });
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'promise1');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'promise2');
});

Promise.race([promise1, promise2]).then((value) => console.log(value)).catch((error) => console.log(error));
