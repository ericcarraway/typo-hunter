var tests = tests || {};

tests.removeDuplicates = function () {
    QUnit.test('removeDuplicates', function (assert) {
        assert.ok(typeof(removeDuplicates) === 'function', 'it should be a function');

        var actual = removeDuplicates(
            ['foo', 'bar', 'bar', 'bar', 'baz', 'baz', 'baz']
        );
        var expected = ['foo', 'bar', 'baz'];

        assert.deepEqual(actual, expected);
    });
};
