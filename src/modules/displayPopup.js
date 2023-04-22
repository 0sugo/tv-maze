// import fetchShows from './modules/displayShows.js';
import fetchComments from './showComments.js';
import counter from './commentCounter.js';

const endPoint = 'https://api.tvmaze.com/shows';
const popUP = document.querySelector('.here');
const commentP = document.createElement('ul');
const h62 = document.createElement('h6');

async function getShows(fixedId) {
  await fetch(endPoint, {

  })
    .then((response) => response.json())
    .then((data) => {
      const popupDiv = document.createElement('div');
      popupDiv.className = 'popup';

      const popupContentDiv = document.createElement('div');
      popupContentDiv.className = 'popup-content';

      const span = document.createElement('span');
      span.className = 'close-btn';
      span.innerHTML = '&times;';
      popupContentDiv.append(span);
      span.addEventListener('click', () => {
        popUP.innerHTML = '';
      });

      const popupBody = document.createElement('div');
      popupBody.className = 'popup-body';

      const popupImage = document.createElement('div');
      popupImage.className = 'popup-image';
      popupImage.id = `${data[fixedId].id}`;
      popupBody.append(popupImage);

      const showImage = document.createElement('img');
      showImage.src = `${data[fixedId].image.original}`;
      popupImage.append(showImage);

      const popupHeader = document.createElement('div');
      popupHeader.className = 'popup-header';

      const h5 = document.createElement('h5');
      h5.textContent = `${data[fixedId].name}`;
      popupHeader.append(h5);

      const popupInfo = document.createElement('div');
      popupInfo.className = 'popup-info';

      const featureList = document.createElement('ul');
      featureList.className = 'feature-list';

      const itemGenre = document.createElement('li');
      itemGenre.className = 'feature-item';
      itemGenre.textContent = `Genres:${data[fixedId].genres}`;

      const itemRating = document.createElement('li');
      itemRating.className = 'feature-item';
      itemRating.textContent = `Rating:${data[fixedId].rating.average}`;

      const itemLanguage = document.createElement('li');
      itemLanguage.className = 'feature-item';
      itemLanguage.textContent = `Language:${data[fixedId].language}`;

      const itemPremiered = document.createElement('li');
      itemPremiered.className = 'feature-item';
      itemPremiered.textContent = `Premiered:${data[fixedId].premiered}`;

      featureList.append(itemGenre, itemRating, itemLanguage, itemPremiered);
      popupInfo.append(featureList);
      popupBody.append(popupInfo);

      const comments = document.createElement('div');
      comments.className = 'comments';

      const addComment = document.createElement('div');
      addComment.className = 'add-comment';

      const form = document.createElement('form');
      form.addEventListener('submit', (e) => {
        commentP.innerHTML = '';
        e.preventDefault();
        const desiredName = document.getElementById('named').value;
        const desiredInsights = document.getElementById('insight').value;
        const involvementUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uqwxRfgCp5Q5KfywJwpo/comments';
        const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uqwxRfgCp5Q5KfywJwpo/comments?item_id=${data[fixedId].name}`;

        fetch(involvementUrl2, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json',
          },
          body: JSON.stringify({

            item_id: `${data[fixedId].name}`,
            username: desiredName,
            comment: desiredInsights,

          }),

        });
        setTimeout(async () => {
          const response = await fetch(involvementUrl);
          const data2 = await response.json();
          const ctr = document.getElementById('ctr');
          counter(ctr, commentP);


          data2.forEach((element) => {
            const p = document.createElement('li');

            p.textContent = `${element.creation_date} ${element.username} : ${element.comment}`;
            commentP.append(p);
            document.getElementById('insight').value = '';
            document.getElementById('named').value = '';
          });
        }, 900);
        

      });

      const h6 = document.createElement('h6');
      h6.textContent = 'Add comment';
      form.append(h6);

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.placeholder = 'name';
      nameInput.id = 'named';

      const insightInput = document.createElement('input');
      insightInput.type = 'text';
      insightInput.placeholder = 'Your insights';
      insightInput.id = 'insight';

      const submitInput = document.createElement('input');
      submitInput.type = 'submit';
      submitInput.value = 'comment';
      form.append(nameInput, insightInput, submitInput);
      addComment.append(form);
      comments.append(addComment);

      const allComments = document.createElement('div');
      allComments.className = 'all-comments';

      h62.id = 'ctr';
      allComments.append(h62);

      fetchComments(`${data[fixedId].name}`, commentP);

      allComments.append(commentP);
      comments.append(allComments);

      popupBody.append(comments);
      popupContentDiv.append(popupBody);
      popupDiv.append(popupContentDiv);
      popUP.append(popupDiv);
    });
}

export default getShows;
