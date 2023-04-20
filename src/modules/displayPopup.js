// import fetchShows from './modules/displayShows.js';
import fetchComments from './showComments.js';


const endPoint = 'https://api.tvmaze.com/shows';
const popUP = document.querySelector('.here');
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
      itemGenre.textContent = `Genres:${data[fixedId].genres}`;

      const itemRating = document.createElement('li');
      itemRating.textContent = `Rating:${data[fixedId].rating.average}`;

      const itemLanguage = document.createElement('li');
      itemLanguage.textContent = `Language:${data[fixedId].language}`;

      const itemPremiered = document.createElement('li');
      itemPremiered.textContent = `Premiered:${data[fixedId].premiered}`;

      featureList.append(itemGenre, itemRating, itemLanguage, itemPremiered);
      popupInfo.append(featureList);
      popupBody.append(popupInfo);

      const comments = document.createElement('div');
      comments.className = 'comment';

      const addComment = document.createElement('div');
      addComment.className = 'add-comment';

      const form = document.createElement('form');

      const h6 = document.createElement('h6');
      h6.textContent = 'Add comment';
      form.append(h6);

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.placeholder = 'name';

      const insightInput = document.createElement('input');
      insightInput.type = 'text';
      insightInput.placeholder = 'Your insights';

      const submitInput = document.createElement('input');
      submitInput.type = 'submit';
      submitInput.value = 'comment';
      form.append(nameInput, insightInput, submitInput);
      addComment.append(form);
      comments.append(addComment);

      const allComments = document.createElement('div');
      allComments.className = 'all-comments';

      const h62 = document.createElement('h6');
      h62.textContent = 'Comments(3)';
      allComments.append(h62);

      const commentP = document.createElement('ul');
      fetchComments(`${data[fixedId].name}`,commentP);

      allComments.append(commentP);
      comments.append(allComments);

      popupBody.append(comments);
      popupContentDiv.append(popupBody);
      popupDiv.append(popupContentDiv);
      popUP.append(popupDiv);
    });
}

export default getShows;
