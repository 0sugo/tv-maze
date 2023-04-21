import { TextEncoder, TextDecoder } from 'text-encoding';

import getShowsCount from './showsCounter.js';

Object.assign(global, { TextEncoder, TextDecoder });

describe('get length of shows', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <a href="" class="menu-link" >
          Movies<span id="shows-count"></span>
        </a>
        <div id="shows-count">
          <div class="show-card"></div>
          <div class="show-card"></div>
          <div class="show-card"></div>
        </div>
    `;
  });

  it('should get the length of shows', () => {
    const countTag = document.getElementById('shows-count');
    const shows = document.getElementsByClassName('show-card');
    getShowsCount();
    countTag.innerHTML = shows.length;
    expect(countTag.innerHTML).toContain('3');
  });
});
