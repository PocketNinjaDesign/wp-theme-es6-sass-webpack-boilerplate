
import World from './hello/World';

import "../sass/style.scss";

let $ = window.jQuery;
let newWorld = new World('Jimi');
console.log(newWorld.sayHello());

$(() => {
  $('body').addClass('SUCCESS-WHOOOOHOOOOOO');
});