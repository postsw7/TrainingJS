var expect = require('chai').expect;
var bind = require('../functionBind.js');

describe('functionBind', function () {

  it('should have true for result', function () {

    var alice = {
      name: 'alice',
      shout: function (){
        return this.name;
      }
    }
    var boundShout = bind(alice.shout, alice);
    boundShout() === 'alice'; // alerts 'alice'
    var boundTemp = bind(alice.shout, {name: 'bob'});
    boundTemp() === 'bob'; // alerts 'bob'

    var func = function (a, b){ return a + b };
    var boundFunc = bind(func, null, 'foo');
    var result = boundFunc('bar');
    ; // true

    expect(boundShout() === 'alice').to.equal(true);
    expect(boundTemp()).to.equal('bob');
    expect(result === 'foobar').to.equal(true);
  });

  it('should have true for result', function () {

    var alice = {
      name: 'alice',
      shout: function (){
        return this.name;
      }
    }
    var boundShout = alice.shout.bind(alice);
    var res = boundShout() === 'alice'; // alerts 'alice'
    boundTemp = alice.shout.bind({name: 'bob'});
    boundTemp(); // alerts 'bob'

    var func = function (a, b){ return a + b };
    var boundFunc = func.bind(null, 'foo');
    var result = boundFunc('bar');

    expect(res).to.equal(true);
    expect(boundTemp()).to.equal('bob');
    expect(result === 'foobar').to.equal(true);
  });

});
