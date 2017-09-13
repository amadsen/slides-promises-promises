 function doCallback(cb) {
    setTimeout(() => {
        throw new Error('A error!');
        setTimeout(cb, 500);
    },100);
 }

console.log('Start', Date.now());

f10
f9(f10)
f8(f9)
f7(f8)
f6(f7)
...
f1(f2);

doCallback(() => {
    console.log('End', Date.now()); 
    doCallback(() => {
        console.log('End', Date.now());
        doCallback(() => {
            console.log('End', Date.now());
            doCallback(() => {
                console.log('End', Date.now());
                doCallback(() => {
                    console.log('End', Date.now());    
                })  
            }) 
        }) 
    })   
})