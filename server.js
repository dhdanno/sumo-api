var bodyParser = require('body-parser');
var express    = require('express'),
    app        = express(),
    port       = process.env.PORT || 3000;
var s_key      = process.env.S_KEY || '123';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Capture input
app.post('/sumo_log_router', function(req, res) {
 
 var r_key = req.headers['api_key'];

 // Verify source
 if (r_key == s_key) {
    res.sendStatus('200');
    console.log(JSON.stringify(req.body));
 } else {
    res.sendStatus('401');
    console.log('Bad Key Used: ' + r_key);
 }

})

app.listen(port);
console.log('API server started listening on: ' + port);
