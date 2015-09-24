let chai = require('chai'),
	splitter = require('../src/helpers/splitter'),
	Tokenizer = require('../src/tokenizer');

chai.should();

describe('tokenizer', () => {
	describe('token', () => {
		
		it('should be a keyword', () => {
			Tokenizer.identifyTokens('[actors]').should.equal('keyword');
			Tokenizer.identifyTokens('[act \cx]').should.equal('keyword');		
		});

	
	});

});


