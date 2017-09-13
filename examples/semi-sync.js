const sharedState = {};

function semiSync(flag, cb) {
    sharedState.semiSync = true;
    return setTimeout(cb, 500);
}

console.log('Start', Date.now());

function end() {
    sharedState.aSync = true;
    console.log('End', Date.now());
    console.log(sharedState);
}

semiSync(true, end);
console.log(sharedState);