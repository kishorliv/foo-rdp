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

    // NUMBERS
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

    // STRINGS
    const isCharString = str[0] === `"` || str[0] === `'`;
    if (isCharString) {
      let s: string = "";

      do {
        s += str[this._cursor++];
      } while (
        str[this._cursor] !== `"` &&
        str[this._cursor] !== `'` &&
        !this.EOF()
      );

      s += this._cursor++; // skip the ending quotation

      return {
        type: "STRING",
        value: s,
      };
    }

    return null;
  }

  EOF() {
    return this._cursor === this._string.length;
  }

  hasMoreTokens(): boolean {
    return this._cursor < this._string.length;
  }
}
