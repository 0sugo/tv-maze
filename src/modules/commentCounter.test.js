// const { JSDOM } = require('jsdom');

const mockData = [{ comment: 'Hello', creation_date: '2023-04-20', username: 'Jane' }, { comment: 'cocoa', creation_date: '2023-04-20', username: 'rose' }];

// const { document } = new JSDOM().window;

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockData),
}));

const counter = async (elements, array) => {
  setTimeout(() => {
    elements.innerHTML = `Comments ${array.childElementCount}`;
  }, 100);
};

beforeEach(() => {
  document.body.innerHTML = `
  <h5 id="index"></h5>
  <ul id="array">
    <li>"hello"</li>
    <li>"hello"</li>
    <li>"hello"</li>
  </ul>  
`;
});

describe('get no of comments in a show', () => {
  let ctr;
  beforeEach(async () => {
    const index = document.getElementById('index');
    const array = document.getElementById('array');

    await counter(index, array);
    ctr = `Comments ${array.childElementCount}`;
  });

  it('returns same number of comments', () => {
    expect(ctr).toBe('Comments 3');
  });
});