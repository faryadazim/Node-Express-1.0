const EventEmitter = require("events");
const emitter = new EventEmitter();

// Event Register or Declared

emitter.on("message", function (arg) {
  console.log("listening emit", arg * arg);
});

// Raise Event
emitter.emit("message", 56);
