import likeBtn from '../images/like.svg';
import getShows from './displayPopup.js';
import fetchLikes from './showLikes.js';

const url = 'https://api.tvmaze.com/shows';
const showsSection = document.getElementById('allShows');

const fetchShows = async () => {
  showsSection.innerHTML = '';

  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < 6; i += 1) {
    const div = document.createElement('div');
    div.className = 'show-card';

    const showImg = document.createElement('img');
    showImg.src = `${data[i].image.original}`;
    showImg.className = 'show-img';
    showImg.alt = `${data[i].name}`;
    div.append(showImg);

    const showDiv = document.createElement('div');
    showDiv.className = 'title-likebtn';
    const h4 = document.createElement('h4');
    h4.textContent = `${data[i].name}`;
    const likeImg = document.createElement('img');
    likeImg.className = 'likebtn';
    likeImg.src = `${likeBtn}`;

    showDiv.append(h4);
    showDiv.append(likeImg);
    div.append(showDiv);

    const h5 = document.createElement('h5');
    fetchLikes(`${data[i].name}`, h5);
    h5.className = 'likes-count';
    div.append(h5);

    const commentButton = document.createElement('button');
    commentButton.setAttribute('id', `${data[i].id}`);
    commentButton.className = 'comment-btn';
    commentButton.textContent = 'Comments';
    div.append(commentButton);
    commentButton.addEventListener('click', () => {
      const fixedId = `${data[i].id - 1}`;

      getShows(fixedId);
    });

    showsSection.append(div);
  }
};

export default fetchShows;
