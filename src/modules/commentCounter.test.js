const { before } = require('lodash');
// const counter = require('./commentCounter');
const  {JSDOM} =require('jsdom');
const document = new JSDOM().window.document;


global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockData)
}));
const mockData = [{"comment":"Hello","creation_date":"2023-04-20","username":"Jane"},{"comment":"cocoa","creation_date":"2023-04-20","username":"rose"}];

const counter = async (elements, array) => {
  setTimeout(() => {
    elements.innerHTML = `Comments ${array.childElementCount}`;
  }, 100);
};

beforeEach(() =>{
  document.body.innerHTML = `
  <h5 id="index"></h5>
  <ul id="array">
    <li>"hello"</li>
    <li>"hello"</li>
    <li>"hello"</li>
  </ul>  
`;
});



describe('get no of comments in a show', () =>{
let ctr;
  beforeEach( async () =>{
    const index = document.getElementById('index');
    const array = document.getElementById('array');

    await counter(index , array);
    ctr =`Comments ${array.childElementCount}`;
  console.log(ctr);


  });


it('returns same number of comments',() =>{
  expect(ctr).toBe(`Comments 3`);
});
});