function waitingFn(TimeInMs){
    const futureTime=Date.now() + TimeInMs;
    while (futureTime > Date.now()){
        // waiting

    }
}
debugger
waitingFn(3000);
console.log("function called has just ended");
