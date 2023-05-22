var url = 'http://mylogger.io/log';

class Logger extends require('events') {

    log(message){
        // console.log(message);
        this.emit('messageLogged',{id:1,url: 'http://'});
    }

}

module.exports = Logger;
