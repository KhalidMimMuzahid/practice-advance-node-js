const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on('event', function firstListener() {
//   console.log('Helloooo! first listener');
// });

// listener
myEmitter.on("birthday", ()=>{
    console.log("Happy Birthday!")
})

myEmitter.on("birthday", (gift)=>{
    console.log(`I will send her a ${gift} as a gift!`)
})



//emitter
myEmitter.emit("birthday", "Lipstick")

