import { Parser } from "../src/Parser";

describe("Numeric literal", () => {
  it("should parse a numeric literal", () => {
    //const program: string = `10`;
    const expected = {
      type: "Program",
      body: {
        type: "NumericLiteral",
        value: 10,
      },
    };

    const parser = new Parser();

    const program = `10`;
    const ast = parser.parse(program);
    console.log({ ast });

    expect(ast).toEqual(expected);
  });
});
