import { dictionary as dict } from "../helpers/symbols";

//Tokenizer code
// Turns Strings into key:value pairs (lexemmes)
// E.g: var foo = 'bar';
// <var: keyword> <foo:identifier> <bar:string>

export function identifyToken(token: String){
	if(token === '[actors]' ) return 'keyword';
	if(token === '[act]') return 'keyword';
}

export function split(sentence){
	return sentence.split(" ");
}

// Object used to represent tokens
export default class Token {
	constructor(sentence){
		this.type = identifyTokens();
	}
	

}




