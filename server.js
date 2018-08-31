//Install express server
const express = require('express');
const path = require('path');
const http = require('http');

const api = require('./server/routes/api');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname, 'dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname, 'dist/carbazarapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
