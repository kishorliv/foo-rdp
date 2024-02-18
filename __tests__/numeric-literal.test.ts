import { Parser } from "../src/Parser";
import { AstNode } from "../src/types";

describe("Numeric literal", () => {
  it("should parse a numeric literal", () => {
    const expected: AstNode = {
      type: "Program",
      body: {
        type: "NumericLiteral",
        value: 10,
      },
    };

    const program = `10`;

    const parser = new Parser();
    const ast = parser.parse(program);

    expect(ast).toEqual(expected);
  });
});
