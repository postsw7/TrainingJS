var expect = require('chai').expect;
var colorOf = require('../MethodsOfNumberObject-toString.js');

describe('MethodsOfNumberObject-toString', function () {

  it('should have correct hexString values', function () {

    expect(colorOf(161, 218, 70)).to.equal("#a1da46");
    expect(colorOf(71, 37, 225)).to.equal("#4725e1");
    expect(colorOf(138, 127, 94)).to.equal("#8a7f5e");
    expect(colorOf(71, 18, 119)).to.equal("#471277");
    expect(colorOf(127, 255, 223)).to.equal("#7fffdf");
  });

  it('should have false for result', function () {

    expect(colorOf(1,12,139) === "#123455").to.equal(false);
    expect(colorOf(25,129,8) === "#123455").to.equal(false);
    expect(colorOf(102,220,221) === "#123455").to.equal(false);
    expect(colorOf(255,17,4) === "#123455").to.equal(false);
    expect(colorOf(127,128,129) === "#123455").to.equal(false);
  });

});
