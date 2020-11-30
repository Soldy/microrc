
const confrc = new (require('confrc')).confrc();
const poolrc = new (require('poolrc')).poolrc();
const initrc = new (require('initrc')).init();
const http = require('http');
exports.server = function(){
    this.start=function(){
        http.createServer(function (req, res) {
            req.on('data', function (chunk) {
             });
             req.on('end', async function () {
            });
        }).listen(
            confrc.get("http").port
        );
    }
    this.stop=function(){ 
        http.close();
    }
}
