
export default class World {
  constructor(name = 'Bob') {
    this.name = name;
  }

  sayHello() {
    return `Hello from ${this.name}`;
  }
}