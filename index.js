'use strict';
const $setuprc = (require('setuprc')).base;
const $http = require('http');


const _server = function(settings){
    this.start=function(_processor_){
        _http = $http.createServer(function (req, res) {
            let _post = '';
            req.on('data', function (chunk) {
                if(
                    (typeof chunk === 'string')&&
                    (typeof chunk !== 'undefined')
                )
                    _post+=chunk;
            });
            req.on('end', async function () {
                try{
                    _post = JSON.stringify(_post);
                }catch(err){
                    return console.log(err);
                }
                res.write(
                    await _processor_(req, _post)
                );
                res.end();
            });
        }).listen(
            _setup.get('port'),
            _setup.get('address')
        );
    }
    this.stop=function(){ 
        _http.close();
    }
    /*
     * setup  helper
     * @private
     */
    let _setup = new $setuprc({
        'address':{
            'type'    : 'string',
            'default' : '127.0.0.1'
        },
        'port' : {
            'type'    : 'integer',
            'default' : 8888 
        }
    });
    let _http;

    /*
     *
     * setup init 
     *
     */
    if(typeof settings !== 'undefined')
        _setup.setup(settings);
}
exports.base = _server;
