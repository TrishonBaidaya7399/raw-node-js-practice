const EventEmitter = require("events");
// create and instance of EventEmitter
const eventEmitter = new EventEmitter();

eventEmitter.on("birthday", (name, gift) => {
  console.log(`Happy Birthday to ${name}`);
});
eventEmitter.on("birthday", (name, gift) => {
  console.log(`I will send you a ${gift}`);
});
eventEmitter.emit("birthday", "Trishon", "bike");
