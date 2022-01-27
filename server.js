// webpack の別解
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), () => {
  console.log('Listening on port ', server.address().port);
});
