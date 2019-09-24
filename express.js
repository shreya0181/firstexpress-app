var express = require('express');
var app = express();
var PORT =process.env.PORT || 5000;
app.use(express.static('public'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
// app.get('//', function (req, res) {
//     res.send('bbye');
//   });

app.listen(PORT,() =>console.log(`SeRvEr StArTeD On PoRT ${PORT}`));