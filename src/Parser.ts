import { Tokenizer } from "./Tokenizer";
import { Token, TokenType } from "./types";

/**
 * "Foo" - a recursive descent parser (rdp) implementation
 */
export class Parser {
  _string: string = "";
  _tokenizer = new Tokenizer();
  _lookahead: Token | null = null;

  /**
   * Parses a string into an AST
   */
  parse(str: string) {
    this._string = str;
    this._tokenizer.init(this._string);
    // prime the tokenizer to obtain the first token which is our lookahead (predictive parsing)
    this._lookahead = this._tokenizer.getNextToken();

    // parse recursively
    return this.Program();
  }

  /**
   * Main entry point of the parser
   *
   * For each production in the grammar, we need a handler function with the same name
   * In each handler, we write grammar
   * Eg: For 'Program' production, we have 'Program' as a function name
   *
   * 'Program' derives 'NumericLiteral' and so on...
   *
   * Program
   *    : NumericLiteral
   *    ;
   *
   */
  Program() {
    return { type: "Program", body: this.NumericLiteral() };
  }

  /**
   * NumericLiteral
   *    : NUMBER
   *    ;
   */
  NumericLiteral() {
    const token = this._eat("NUMBER");

    return {
      type: "NumericLiteral",
      value: Number(token.value),
    };
  }

  /**
   * Validate and move lookahead
   */
  _eat(tokenType: TokenType) {
    const token = this._lookahead;

    if (token == null) {
      throw new SyntaxError(
        `Unexpected end of input, expected: "${tokenType}"`
      );
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(
        `Unexpected token: "${token.type}", expected: "${tokenType}"`
      );
    }

    // move to next token
    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
}
