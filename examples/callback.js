 function doCallback(cb) {
     setTimeout(cb, 500);
 }

console.log('Start', Date.now());

doCallback(() => {
    console.log('End', Date.now());    
})