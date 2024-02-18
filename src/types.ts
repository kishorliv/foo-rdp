export type TokenType = "NUMBER" | "STRING";

export interface Token {
  type: TokenType;
  value: string;
}

export type ProductionType = "Program" | "NumericLiteral" | "StringLiteral";

export interface AstNode {
  type: ProductionType;
  body: {
    type: ProductionType;
    value: string;
  };
}
