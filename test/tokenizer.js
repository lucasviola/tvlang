let chai = require('chai'),
	Tokenizer = require('../src/tokenizer');

chai.should();

describe('tokenizer', () => {
	describe('token', () => {
		
		it('should be a keyword', () => {
			Tokenizer.identifyToken('[actors]').should.equal('keyword');
			Tokenizer.identifyToken('[act]').should.equal('keyword');		
		});
	
	});

	describe('sentence', () => {
	
		it('should split', () => {
		
			Tokenizer.split('Actor, is an actor').length.should.be.equal(4);
		});
	});

});


