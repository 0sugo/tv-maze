
const counter = async (elements,array) => {
    setTimeout(()=>{
        elements.innerHTML = `Comments ${array.length}`;
    
          },20);

};

export default counter;