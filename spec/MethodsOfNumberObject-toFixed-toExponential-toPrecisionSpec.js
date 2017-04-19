var assert = require('chai').assert;
var howManySmaller = require('../MethodsOfNumberObject-toFixed-toExponential-toPrecision.js');

describe('MethodsOfNumberObject-toFixed-toExponential-toPrecision', function () {

  it('should have correct value', function () {
    assert.equal(howManySmaller([1.234,1.235,1.228],1.24), 2);
    assert.equal(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);
    assert.equal(howManySmaller([3.1288,3.1212,3.1205],3.1212), 2);
  });

});