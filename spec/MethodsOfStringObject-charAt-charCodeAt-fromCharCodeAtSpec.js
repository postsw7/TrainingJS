var assert = require('chai').assert;
var topSecret = require('../MethodsOfStringObject-charAt-charCodeAt-fromCharCodeAt.js');

describe('MethodsOfStringObject-charAt-charCodeAt-fromCharCodeAt', function () {

  it('should have expected answers', function () {
    assert.equal(topSecret("Pb qdph lv Mrkq") , "My name is John");
    assert.equal(topSecret("wklv lv dq hadpsoh") , "this is an example");
    assert.equal(topSecret("Khoor Zruog!") , "Hello World!");
  });

  it('should answer three questions', function () {
    assert.equal(topSecret("Wrs vhfuhw ilohv: Qr. 3781 Vxshu djhqw QRQeB, rq d gdun qljkw, vwroh wkh Hasluhg elvfxlwv iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh.").includes("3781"), true);
    assert.equal(topSecret("Wrs vhfuhw ilohv: Qr. 3781 Vxshu djhqw QRQeB, rq d gdun qljkw, vwroh wkh Hasluhg elvfxlwv iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh.").includes("NONbY"), true);
    assert.equal(topSecret("Wrs vhfuhw ilohv: Qr. 3781 Vxshu djhqw QRQeB, rq d gdun qljkw, vwroh wkh Hasluhg elvfxlwv iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh.").includes("Expired biscuits"), true);
  });

});
