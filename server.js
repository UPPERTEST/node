var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var env = {}
  env['environment'] = process.env.TEST_ENV
  res.setHeader('Content-Type', 'text/plain');
  res.send(JSON.stringify(env));
});

app.use(express.static('public'));
app.listen(80);
console.log('Listening on port 80');
