const fetchComments = async (item1, insertP,) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/comments?item_id=${item1}`);
  const result = await response.json();

  result.forEach((element) => {
    const p = document.createElement('li');

    p.textContent += element.creation_date;
    p.textContent += ' ';
    p.textContent += element.username;
    p.textContent += ':';
    p.textContent += element.comment;
    insertP.append(p);
  });
  setTimeout(() => {

    const counter = insertP.childElementCount;
    const ctr = document.querySelector('#ctr');
    ctr.innerHTML = `Comments ${counter}`;
  }, 1);
};

export default fetchComments;
