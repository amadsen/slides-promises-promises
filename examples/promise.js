const p = new Promise((resolve, reject) => {
    // do stuff
    setTimeout(() => {
        Date.now() % 2 ? resolve('success') : reject(new Error('I have failed!'));
    }, 200);
});

p.then((data) => {
    // service success
    setImmediate(() => dispatch(success));
})
.catch((err) => {
    // serivce failed
    dispatch(failed);
})