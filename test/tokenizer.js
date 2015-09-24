let chai = require('chai'),
	Tokenizer = require('../src/tokenizer');

chai.should();

describe('tokenizer', () => {
	describe('[actors]', () => {
		
		it('should be a keyword', () => {
			Tokenizer.identifyToken('[actors]').should.equal('keyword');
		});
	
	});

	describe('[act]', () => {
		it('should be a keyword', () =>{
			Tokenizer.identifyToken('[act]').should.equal('keyword');	
		});
	});

	describe(',', () =>{
		it('should be a var assignment', () =>{
			Tokenizer.identifyToken(',').should.equal('var_assignment');
		});
	});

	describe('sentence', () => {
		it('should split', () => {
		
			Tokenizer.split('Actor, is an actor').length.should.be.equal(4);
		});
	});

});


