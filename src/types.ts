export type TokenType = "NUMBER" | "STRING";

export interface Token {
  type: TokenType;
  value: string;
}

export type ProductionType = "Program" | "NumericLiteral" | "StringLiteral";

export interface AstNodeBody {
  type: ProductionType;
  value: string | number;
}

export interface AstNode {
  type: ProductionType;
  body: AstNodeBody;
}
