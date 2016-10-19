var filterGitSha = require('./filterGitSha.js');
var expect = require('chai').expect;

describe('filterGitSha', function () {
    var actual;
    var expected;

    describe('smoke tests', function () {
        it('should exist', function () {
            // Expected an assignment or function call and instead saw an expression.
            /* jshint -W030 */
            expect(filterGitSha).to.exist;
        });

        it('should be a function', function () {
            expect(filterGitSha).to.be.a('function');
        });

        it('test 1', function () {
            expect(filterGitSha(['foo', 'bar'])).to.eql(['foo', 'bar']);
        });

        it('test 2', function () {
            expect(filterGitSha([23, 42])).to.eql([23, 42]);
        });
    });

    describe('tests', function () {
        it('test 3', function () {
            actual = filterGitSha([
                '06f58df',
                'this',
                '08b3763',
                '09284e3',
                'should',
                '0c6d074',
                '0dbb6b0',
                'be',
                '1401dde',
                '1bbffe3',
                '25cd792',
                '272330e',
                'left',
                '4996a04'
            ]);

            expected = [
                'this',
                'should',
                'be',
                'left'
            ];

            expect(actual).to.eql(expected);
        });

        it('test 4', function () {
            actual = filterGitSha([
                '5db945g',
                '636ac81'
            ]);

            expected = [
                '5db945g'
            ];

            expect(actual).to.eql(expected);
        });

        it('test 5', function () {
            actual = filterGitSha([
                '5db945aa',
                '636ac81'
            ]);

            expected = [
                '5db945aa'
            ];

            expect(actual).to.eql(expected);
        });

        it('should not filter words that are all letters', function () {
            expect(filterGitSha(['deedeed', '06f58df'])).to.eql(['deedeed']);
        });

        it('should not filter words that are all numbers', function () {
            expect(filterGitSha(['0123456', '06f58df'])).to.eql(['0123456']);
        });
    });

    describe('40 character', function () {
        it('test 6', function () {
            actual = filterGitSha([
                '606b8f77af3456639a3bfa9e73c9171771fc9482',
                '3452b0c4c051161b39291793be2ad36c4a26d120',
                '8e3e17ecf0e2bfa682eeaa078eda661708f3706e',
                'leave this',
                'cd55551224dbbef683653d19793a219bc1fd6558',
                'b8553adbdb283f9dc73c4e0d6d6cd307db3d1117',
                '42dc77f365a2fb59499c1523075bfe9bcf6ddaca',
                '20fadb666950abb481f8c7fab6e5dad05e027ef7'
            ]);

            expected = [
                'leave this'
            ];

            expect(actual).to.eql(expected);
        });
    });
});
