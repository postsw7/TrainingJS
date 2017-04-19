var assert = require('chai').assert;
var firstToLast = require('../MethodsOfStringObject-indexOf.js');

describe('MethodsOfStringObject-indexOf', function () {

  it('should have a expected answer', function () {
    assert.equal(firstToLast("ababc","a") , 2);
    assert.equal(firstToLast("ababc","c") , 0);
    assert.equal(firstToLast("ababc","d") , -1);
  });

});
