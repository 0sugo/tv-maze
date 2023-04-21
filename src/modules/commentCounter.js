const counter = async (elements, array) => {
  setTimeout(() => {
    elements.innerHTML = `Comments ${array.childElementCount}`;
  }, 100);
};

export default counter;