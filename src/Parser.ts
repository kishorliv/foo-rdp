/**
 * "Foo" - a recursive descent parser (rdp) implementation
 */
export class Parser {
  _string: string = "";
  /**
   * Parses a string into an AST
   */
  parse(str: string) {
    this._string = str;

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
    return {
      type: "NumericLiteral",
      value: Number(this._string),
    };
  }
}
