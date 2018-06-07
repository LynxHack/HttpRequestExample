var https = require("https");

console.log("complete");

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  //console.log('Response ', response);
response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  }); //convert the chunk to string
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");


