const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('An event occured');
const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => { // HERE an event is made named as waterfull
  console.log('Please turn off the motor'); // here in the console.log there is an event listener
  setTimeout(() =>{
    console.log('Please off the motor ! Its the final reminder')
  }, 3000); // this statement will run after 3s as we have set the timer of 3sec
});

const myEvent = new MyEmitter();
myEvent.on('Electricity', () => {
  console.log("Please turn on the switch");
  setTimeout(() =>{
    console.log("Please kindly switch on the switch")
  }, 4000);
})

console.log("the script is running")
console.log("still running")
myEmitter.emit('WaterFull');
myEvent.emit('Electricity');