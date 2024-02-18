import { Parser } from "../src/Parser";
import { AstNode } from "../src/types";

describe("String literal", () => {
  it("should parse a string literal denoted by single quotations", () => {
    const expected: AstNode = {
      type: "Program",
      body: {
        type: "StringLiteral",
        value: "foo",
      },
    };

    const program = `'foo'`;

    const parser = new Parser();
    const ast = parser.parse(program);

    expect(ast).toEqual(expected);
  });

  it("should parse a string literal denoted by double quotations", () => {
    const expected: AstNode = {
      type: "Program",
      body: {
        type: "StringLiteral",
        value: "foo01",
      },
    };

    const program = `"foo01"`;

    const parser = new Parser();
    const ast = parser.parse(program);

    expect(ast).toEqual(expected);
  });
});
