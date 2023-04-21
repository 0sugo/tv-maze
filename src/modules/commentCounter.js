const counter = async (elements, array) => {
  array.childElementCount.length = 0;
  setTimeout(() => {
    elements.innerHTML = `Comments ${array.childElementCount}`;
  }, 100);
};

export default counter;
