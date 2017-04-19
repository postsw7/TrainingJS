var assert = require('chai').assert;
var splitAndMerge = require('../MethodsOfStringObject-split-join-concat.js');

describe('MethodsOfStringObject-split-join-concat', function () {

  it('should have expected answers', function () {
    assert.equal(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    assert.equal(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    assert.equal(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    assert.equal(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
  });

});
