var express = require('express');
var calculator = require('./calculator');
var app = express();

app.get('/', function (req, res) {
  var num1 = 10;
  var num2 = 5;
  var add = calculator.add(num1,num2);
  var substract = calculator.substract(num1,num2);
  var multiply = calculator.multiply(num1,num2);
  var divide = calculator.divide(num1,num2);

  res.send('Express Calculator! - Add: ' + add + ' - Substract: ' + substract + " - Multiply: " + multiply + " - Divide: " + divide);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
