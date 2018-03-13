
import World from './hello/World';

import '../sass/style.scss';

const $ = window.jQuery;
const newWorld = new World('Jimi');

$(() => {
  $('body')
    .addClass('SUCCESS-WHOOOOHOOOOOO')
    .prepend($('<h1/>').html(newWorld.sayHello()));
});
