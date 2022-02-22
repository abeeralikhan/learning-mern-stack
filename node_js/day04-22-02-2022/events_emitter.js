const EventEmitter = require('events');
// - Event Emitter is capitalized because its a javascript class
// - We can create an instance of the EventEmitter class for each subject that we want emit events from

// - Creating an instance for the subject 'celebrity'
const celebrity = new EventEmitter();

// - Creating observers that can listen to named events generated
// by the celebrity instance (or the subject)

// + We create an observer by using the 'on' method on the EventEmitter class' instance
// >> EventEmitter_instance.on('<NAMED-EVENT>', <Listener: A Callback>);

// + Observer 1
celebrity.on('movie', (result) => {
    if (result === 'hit') {
        console.log("Listener 1: Woohoo! What an amazing movie!");
    }
});

// + Observer 2
celebrity.on('movie', (result) => {
    if (result === 'flop') {
        console.log("Listener 2: It could have been better!");
    }
});

// process is also an instance of the EventEmitter class
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

// process.exit() --> We can play with the process

// - Now, how do we emit the named event 'new movie' from out subject 'celebrity' so the observers 
// or listerners can execute their callback functions?

// + We emit named events from the EventEmitter class' instance (or out subject i.e 'celebrity')
// using the 'emit' method
// >> EventEmitter_instance.emit('<NAMED-EVENT>')

// + Emitting the named event from the celebrity instance
celebrity.emit('movie', 'hit');
celebrity.emit('movie', 'flop');


