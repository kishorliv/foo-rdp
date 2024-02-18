export type TokenType = "NUMBER";

export interface Token {
  type: TokenType;
  value: string;
}

// export type Production = "Program" | "NumericLiteral" | "StringLiteral";

// export interface AstNode {
//   type: Production;
//   body: Token;
// }
