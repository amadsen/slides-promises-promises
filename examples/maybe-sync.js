const sharedState = {};
function maybeSync(flag, cb) {
    return (!!flag) ? cb() : setTimeout(cb, 500);
}

console.log('Start', Date.now());

function end() {
    sharedState.maybe = !!sharedState.maybe;
    console.log('End', Date.now());    
}

maybeSync(sharedState.maybe, end);
maybeSync(true, end);
maybeSync(sharedState.maybe, end);
maybeSync(sharedState.maybe, end);
maybeSync(sharedState.maybe, end);