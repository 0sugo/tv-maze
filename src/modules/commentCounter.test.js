// const { JSDOM } = require('jsdom');
const mockData1 = [];
const mockData = [{ comment: 'Hello', creation_date: '2023-04-20', username: 'Jane' }, { comment: 'cocoa', creation_date: '2023-04-20', username: 'rose' }];

// const { document } = new JSDOM().window;

const getData = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uqwxRfgCp5Q5KfywJwpo/comments?item_id=Under the Dome');
  const result = await response.json();
  return result;
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockData),
}));

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockData1),
}));
let arrayTry;
let indexTry;

beforeEach(() => {
  document.body.innerHTML = `
  <h5 id="indexTry"></h5>
  <ul id="arrayTry">
  </ul>  
`;
  arrayTry = document.getElementById('arrayTry');
  indexTry = document.getElementById('indexTry');
});

const attach = (arr) => {
  arr.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.textContent = `${element.creation_date} ${element.username} : ${element.comment}`;
    arrayTry.append(newLi);
  });
};

describe('Check if length of API result is 0', () => {
  // Compare if API is mocked
  it('confirms', async () => {
    const data = await getData();
    expect(data.length).toEqual(mockData1.length);
  });
});

// Test if API is null
describe('Check if length of API result is 0', () => {
  attach(mockData1);
  it('Confirms if child elements of arraytry is 0', () => {
    expect(`Comments ${arrayTry.childElementCount}`).toBe('Comments 0');
  });
});

// Test for adding elementsAdding elements
describe('Check if length of child elements has been updated', () => {
// attach(mockData);
  document.body.innerHTML = `
  <h5 id="index"></h5>
  <ul id="tarray">
    <li>"hello"</li>
    <li>"hello"</li>
    <li>"hello"</li>
  </ul>  
`;
  const tarray = document.getElementById('tarray');
  it('confirms its2', () => {
    expect(`Comments ${tarray.childElementCount}`).toBe('Comments 3');
  });
});

// Function to add comment with current count
const counter = async (elements, array) => {
  setTimeout(() => {
    elements.innerHTML = `Comments ${array.childElementCount}`;
  }, 100);
};
