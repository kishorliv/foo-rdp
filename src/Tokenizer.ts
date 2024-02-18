import { Token } from "./types";

export class Tokenizer {
  _string: string = "";
  _cursor: number = 0;

  init(str: string) {
    this._string = str;
    this._cursor = 0;
  }

  getNextToken(): Token | null {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const str = this._string.slice(this._cursor);

    // NUMBER
    const isCharNumber = (idx: number) => !Number.isNaN(Number(str[idx]));
    if (isCharNumber(0)) {
      let num: string = "";

      while (isCharNumber(this._cursor)) {
        num += str[this._cursor++];
      }

      return {
        type: "NUMBER",
        value: num,
      };
    }

    return null;
  }

  hasMoreTokens(): boolean {
    return this._cursor < this._string.length;
  }
}
