var tests = tests || {};

tests.removeDuplicates = function () {
    QUnit.test('removeDuplicates', function (assert) {
        var actual;
        var expected;

        assert.ok(typeof(removeDuplicates) === 'function', 'it should be a function');

        actual = removeDuplicates(
            ['foo', 'bar', 'bar', 'bar', 'baz', 'baz', 'baz']
        );
        expected = ['foo', 'bar', 'baz'];

        assert.deepEqual(actual, expected);
    });
};
