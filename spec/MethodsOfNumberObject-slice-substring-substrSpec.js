var expect = require('chai').expect;
var cutIt = require('../MethodsOfNumberObject-slice-substring-substr.js');

describe('MethodsOfNumberObject-slice-substring-substr', function () {

  it('should be equal to expected value', function () {
    expect(cutIt(["ab","cde","fgh"])[1]).to.equal("cd");
    expect(cutIt(["abc","defgh","ijklmn"])[2]).to.equal("ijk");
    expect(cutIt(["codewars","javascript","java"])[0]).to.equal("code");
  });

});
