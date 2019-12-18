const EventEmitter = require('events');
// class human object John 

var url = 'http://mylogger.io/log';
class Logger extends EventEmitter {
     log(message){
        //send http request
        console.log(message);
        
        this.emit('messageLogged', { id: 1, url: 'http://'});
        }
}
// when function is inside a class-- method in that class
module.exports = Logger;


