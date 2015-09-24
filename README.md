## tvlang

## Esoteric Programming Language based on tv shows

* See the [examples](https://github.com/lucasviola/tvlang/tree/master/examples).

### Transpiling the code:

* Run: `babel src -w --out-dir lib/`

### Running the tests:

*  Run: `mocha --compilers js:babel/register`

### Running coverage:

* Run: `istanbul cover mocha -- --compilers js:Babel/register`

Heavily based on:
* [Babel](https://github.com/babel/babel)
* [Acorn](https://github.com/marijnh/acorn)
* [Acorn-JSX](https://github.com/RReverser/acorn-jsx)
