const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT_NUMBER = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(req, res) {
	console.log(JSON.stringify(req.body));
	res.sendStatus(200);
});

app.listen(PORT_NUMBER, function() {
	console.log('Listening on port ' + PORT_NUMBER)
});