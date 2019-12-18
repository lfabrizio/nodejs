const EventEmitter = require('events');
// class human object John 
const emitter = new EventEmitter();
// raise an event
// register a listener 
emitter.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});
emitter.emit('messageLogged', { id: 1, url: 'http://'});
// emit means making a noise or signalling 
