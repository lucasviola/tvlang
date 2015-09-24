import { dictionary as dict } from "../helpers/symbols";
import { splitter as sp } from "../helpers/splitter";

//Tokenizer code
// Turns Strings into key:value pairs (lexemmes)
// E.g: var foo = 'bar';
// <var: keyword> <foo:identifier> <bar:string>

export function identifyTokens(token: String){
	if(token === '[actor]' ) return 'keyword';
}

export default class Tokenizer {
	constructor(sentence){
		this.sentence = sentence;
	}
	

}




