let chai = require('chai'),
	splitter = require('../src/helpers/splitter');

chai.should();

describe('splitter', () => {
	describe('sentence', () => {
		
		it('should return an array', () => {
			splitter.split('split sentence').should.equal(['split', 'sentence']);
		
		});
	
	});

});
