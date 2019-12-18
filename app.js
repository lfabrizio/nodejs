const EventEmitter = require('events');
// class human object John 
const emitter = new EventEmitter();
// raise an event
// register a listener 
emitter.on('messageLogged', function() {
    console.log('Listener called');
});
emitter.emit('messageLogged');
// emit means making a noise or signalling 
