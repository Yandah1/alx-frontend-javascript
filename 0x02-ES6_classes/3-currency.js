export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for code attribute
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
