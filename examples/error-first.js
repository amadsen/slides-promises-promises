function doCallback(cb) {
    setTimeout(() => {
        Date.now() % 2 ?
            cb(null, 'success') : // success
            cb(new Error('Failure')); // failure
    }, 500);
}

function end(err, data) {
    console.log('End', err, data, Date.now());    
}

doCallback(end);
doCallback(end);
doCallback(end);
doCallback(end);
doCallback(end);
