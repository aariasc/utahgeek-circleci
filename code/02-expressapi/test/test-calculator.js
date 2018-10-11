var expect  = require('chai').expect;
var calculator = require('../calculator');
var num1 = 10;
var num2 = 5;

it('Test Addition', function(done){
  var result = calculator.add(num1, num2);
  expect(result).to.equal(15);
  done();
});

it('Test Substraction', function(done){
  var result = calculator.substract(num1, num2);
  expect(result).to.equal(5);
  done();
});

it('Test Multiply', function(done){
  var result = calculator.multiply(num1, num2);
  expect(result).to.equal(50);
  done();
});

it('Test Divide', function(done){
  var result = calculator.divide(num1, num2);
  expect(result).to.equal(2);
  done();
});
