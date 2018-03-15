// https://facebook.github.io/jest/docs/en/tutorial-jquery.html

import $ from 'jquery';

let innerHTML = `
  <div id="container">
    <div class="text"></div>
  </div>
`;

describe('jQuery', () => {
  it('adds a classname to container', () => {
    document.body.innerHTML = innerHTML;

    const $container = $('#container');
    $container.addClass('chickens');

    expect($container.hasClass('chickens')).toBe(true);
  });
});
