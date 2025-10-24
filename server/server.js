let fs = require('fs');
let serverPort = 9001,
    webDir = "../";

let express = require('express');
let app = express();
app.use(express.static(webDir));
app.use(express.static('../react'));
app.use(express.static('../react/pages'));
let session = require('express-session');


app.use('/api/*', function(req, resp, next) {
    if (req.session.user) next();
    else resp.status(403).json({ error: 'denied' });
})

let bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: 'image/*' }));

const path = require('path')
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, webDir, 'index.html'))
})

app.listen(serverPort);

console.log('Server listening on http://localhost:' + serverPort);
console.log('Distributing site from: ' + webDir);