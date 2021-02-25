'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('getPlural function test', () => {
    it('should return Boys c\'est un test', () => {
        var result = index.getPlural('Boy');
        expect(result).to.equal('Boys c\'est un test');
    });
    it('should return Girls c\'est un test', () => {
        var result = index.getPlural('Girl');
        expect(result).to.equal('Girls c\'est un test');
    });
    it('should return Geese c\'est un test', () => {
        var result = index.getPlural('Goose');
        expect(result).to.equal('Geese c\'est un test');
    });
    it('should return Toys c\'est un test', () => {
        var result = index.getPlural('Toy');
        expect(result).to.equal('Toys c\'est un test');
    });
    it('should return Men c\'est un test', () => {
        var result = index.getPlural('Man');
        expect(result).to.equal('Men c\'est un test');
    });
});
