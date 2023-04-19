import likeBtn from '../images/like.svg';

const url = 'https://api.tvmaze.com/shows';
const showsSection = document.getElementById('allShows');

const fetchShows = async () => {
  showsSection.innerHTML = '';

  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < 6; i += 1) {
    // console.log(data[i]);
    const div = document.createElement('div');
    div.className = 'show-card';
    div.innerHTML = `
      <img src=${data[i].image.original} alt=${data[i].name} class="show-img">
      <div class='title-likebtn'>
        <h4>${data[i].name}</h4>
        <img class="likebtn" src=${likeBtn}>
      </div>
      <div><h5>5 likes</h5></div>
      <button class='comment-btn'>Comments</button>
      
    `;

    showsSection.append(div);
  }
  // console.log(data);
};

export default fetchShows;