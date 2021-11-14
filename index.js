'use strict';
const $confrc = new (require('confrc')).base;
const $poolrc = new (require('poolrc')).poolrc();
const $initrc = new (require('initrc')).init();
const http = require('http');


const _server = function(){
    this.start=function(_processor_){
        http.createServer(function (req, res) {
            let _post = '';
            req.on('data', function (chunk) {
                _post+=chunk;
            });
            req.on('end', async function () {
                _post = JSON.stringify(_post);
                res.write(
                    await _processor_(req, _post);
                );
                res.send();
            });
        }).listen(
            confrc.get('http').port
        );
    }
    this.stop=function(){ 
        http.close();
    }
}
exports.base = _server;
