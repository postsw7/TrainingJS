var assert = require('chai').assert;
var whatNumberIsIt = require('../NumberOfObjectAndItsProperties.js');

describe('whatNumberIsIt', function () {
  it('should have correct answer', function () {
    assert.equal(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
    assert.equal(whatNumberIsIt(100),"Input number is 100");
    assert.equal(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
    assert.equal(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
    assert.equal(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
    assert.equal(whatNumberIsIt(NaN),"Input number is Number.NaN");
    assert.equal(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");
  });

});
