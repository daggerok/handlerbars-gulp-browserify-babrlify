export default class Person {
  constructor(name) {
    this._name = name
  }

  hi() {
    return `holla, ${this._name}!`
  }
}