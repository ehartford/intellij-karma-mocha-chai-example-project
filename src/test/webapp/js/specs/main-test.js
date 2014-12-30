// the test harness is Mocha. http://mochajs.org/#tdd-interface
// the assertion library is Chai. http://chaijs.com/api/assert

suite('main.js Test Suite', function(){

    setup(function(){

    });

    test('add', function(){
        assert.isNumber(add(2, 3));
        assert.equal(add(2, 3), 5);
        assert.isNumber(add(2, -2));
        assert.equal(add(2, -2), 0);

        assert.throws(function(){add(2, null);});
        assert.throws(function(){add(2, "frog");});
        assert.throws(function(){add(2, {"shoes": 2});});
    });

    test('subtract', function(){
        assert.isNumber(subtract(2, 3));
        assert.equal(subtract(2, 3), -1);
        assert.isNumber(subtract(2, 2));
        assert.equal(subtract(2, 2), 0);

        assert.throws(function(){subtract(2, null);});
        assert.throws(function(){subtract(2, "frog");});
        assert.throws(function(){subtract(2, {"shoes": 2});});
    });

});