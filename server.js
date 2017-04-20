/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3165;

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');

// The Express app
var app = express();

// Serve files from public folder
app.use(express.static('public'));

// Set up authentication
var AuthCAS = require('auth-cas')

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
