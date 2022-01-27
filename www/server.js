var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 5000);

// 404
app.use(function (req, res) {
  res.status(404);
  res.end('[404] There is no such address: ' + req.path);
});

// 500
app.use(function (err, req, res, next) {
  res.status(500);
  res.end('[500] An error has occurred in the server: ' + err);
});

// listen
var server = app.listen(app.get('port'), () => {
  console.log('Listening on port ', server.address().port);
});
