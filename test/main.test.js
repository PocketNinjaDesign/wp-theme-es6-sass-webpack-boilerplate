import World from '../dev/hello/World';
//import { describe, it, expect } from 'jest-cli';
//jest.dontMock('../dev/hello/World.js');


describe('helloWorld', () => {
  it('returns Hello World from default', () => {
    let newWorld = new World();
    expect(newWorld.sayHello()).toBe('Hello from Bob');
  });

  it('returns Hello from given name', () => {
    let newWorld = new World('Kermit the frog');
    expect(newWorld.sayHello()).toBe('Hello from Kermit the frog');
  });
});
