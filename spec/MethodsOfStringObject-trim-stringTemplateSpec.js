var assert = require('chai').assert;
var fiveLine = require('../MethodsOfStringObject-trim-stringTemplate.js');

describe('MethodsOfStringObject-trim-stringTemplate', function () {

  it('should have expected answers', function () {
    assert.equal(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
    assert.equal(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
    assert.equal(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
  });

});
