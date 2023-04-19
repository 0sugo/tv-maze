import likeBtn from '../images/like.svg';
import getShows from '../index.js'

const url = 'https://api.tvmaze.com/shows';
const showsSection = document.getElementById('allShows');
let individualButton = document.querySelector(".comment-btn");
let fixedId=0;


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
    h5.textContent = '5 likes';
    div.append(h5);

    const commentButton = document.createElement('button');
    commentButton.setAttribute('id', `${data[i].id}`);
    commentButton.className = 'comment-btn';
    commentButton.textContent = 'Comments';
    div.append(commentButton);
    commentButton.addEventListener('click',function(){
      fixedId=`${data[i].id-1}`;
      console.log(fixedId);
      
      getShows (fixedId);

    })

    showsSection.append(div);
  }

console.log(individualButton);

  // let individualButton = document.querySelector(".comment-btn");
  //   individualButton.addEventListener('click',function(){
  //     fixedId=individualButton.getAttribute('id');
  //     console.log("fixedId");
  //   });

  
  // console.log(idArray);
};


// function listen(){
//     individualButton.addEventListener('click',function(){
//       fixedId=individualButton.getAttribute('id');
//       console.log("fixedId");
//     });
// }


export default fetchShows;


