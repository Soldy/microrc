'use strict';
const nanoTest  = new (require('nanoTest')).test({
    'progress_bar' : false,
    'debug_print' : 'short'
});

const $microrc  = new (require('./index.js')).base;
$microrc.start(function(req, post){
    return post;
});
