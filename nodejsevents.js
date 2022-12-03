//Events in Node js

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();

// waterfall-->event and when this event fire then onky call back function runs
myEmitter.on('Waterfall',()=>{
    console.log('Please turn off the motor');
    //set time out not block other code it will run ony when all lines code run in scripts of node
    setTimeout(()=>{
        console.log('Please turn off the motor! Its a gentle remainder');
    },3000);
});

console.log('The Scrit is running');
myEmitter.emit('Waterfall');
console.log('The Scrit is still running');
