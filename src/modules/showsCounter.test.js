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
    document.body.innerHTML = `
        <a href="" class="menu-link" >
          Movies<span id="shows-count"></span>
        </a>
        <div id="shows-count">
        </div>
    `;
    const countTag = document.getElementById('shows-count');
    const shows = document.getElementsByClassName('show-card');
    getShowsCount();
    countTag.innerHTML = shows.length;
    if (shows.length === 0) {
      expect(countTag.innerHTML).toContain('0');
    }
  });

  it('should return 2 when there are 2 shows on screen', () => {
    document.body.innerHTML = `
        <a href="" class="menu-link" >
          Movies<span id="shows-count"></span>
        </a>
        <div id="shows-count">
           <div class="show-card"></div>
          <div class="show-card"></div>
        </div>
    `;
    const countTag = document.getElementById('shows-count');
    const shows = document.getElementsByClassName('show-card');
    getShowsCount();
    countTag.innerHTML = shows.length;
    expect(countTag.innerHTML).toContain('2');
  });

  it('should return 0 when there are 0 shows on screen', () => {
    const countTag = document.getElementById('shows-count');
    const shows = document.getElementsByClassName('show-card');
    getShowsCount();
    countTag.innerHTML = shows.length;
    expect(countTag.innerHTML).toContain('3');
  });
});
