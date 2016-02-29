var tests = tests || {};

tests.filterByArr = function () {
    QUnit.test('filterByArr', function (assert) {
        assert.ok(typeof(filterByArr) === 'function', 'it should be a function');

        var actual = filterByArr(['foo', 'bar', 'baz'], ['bar', 'baz']);
        var expected = ['foo'];

        assert.deepEqual(actual, expected);
    });
};
