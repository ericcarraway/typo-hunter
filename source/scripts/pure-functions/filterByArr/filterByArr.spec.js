var tests = tests || {};

tests.filterByArr = function () {
    QUnit.test('filterByArr', function (assert) {
        var actual;
        var expected;

        assert.ok(typeof(filterByArr) === 'function', 'it should be a function');

        actual = filterByArr(['foo', 'bar', 'baz'], ['bar', 'baz']);
        expected = ['foo'];

        assert.deepEqual(actual, expected);
    });
};
