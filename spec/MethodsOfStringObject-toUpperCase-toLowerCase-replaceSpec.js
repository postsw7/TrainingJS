var assert = require('chai').assert;
var alienLanguage = require('../MethodsOfStringObject-toUpperCase-toLowerCase-replace.js');

describe('MethodsOfStringObject-toUpperCase-toLowerCase-replace', function () {

  it('should have expected answers', function () {
    assert.equal(alienLanguage("My name is John") , "My NAMe Is JOHn");
    assert.equal(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
    assert.equal(alienLanguage("Hello World") , "HELLo WORLd");
    assert.equal(alienLanguage("HELLO WORLD") , "HELLo WORLd");
  });

});
