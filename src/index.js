import './style.css';
import fetchShows from './modules/displayShows.js';
// import displayPopup from './modules/displayPopup.js';

fetchShows();
// displayPopup();

const endPoint = 'https://api.tvmaze.com/shows';
let popUP = document.querySelector('.popup-body');
let dump; 

async function getShows (){
    await fetch(endPoint,{

    })
    .then(response => response.json())
    .then(data =>{
        for (let i = 0; i <6 ; i++) {
        console.log(data[i]);

           dump= `<div class="popup-image" id=${data[i].id}>
            <img src="${data[i].image.original}" alt="movie">
          </div>
          <div class="popup-header">
            <h5>${data[i].name}</h5>
          </div>
          <div class="popup-info">
            <ul class="feature-list">
              <li class="feature-item">Genres:${data[i].genres}</li>
              <li class="feature-item">Rating:${data[i].rating.average}</li>
              <li class="feature-item">Language:${data[i].language}</li>
              <li class="feature-item">Premiered:${data[i].premiered}</li>

            </ul>
          </div>
          <div class="comments">
            <div class="add-comment" >
              <form>
              <h6>Add comment</h6>
                <input type="text" placeholder="name">
                <input type="text" placeholder="Your insights">
                <input type="submit" value="comment">
              </form>
            </div>

            <div class="all-comments" >
              <h6>Comments(3)</h6>
              <p>mdfhdghgv</p>
            
            </div>
            

          </div>`
            
        }
        popUP.innerHTML=dump;
        


    })

}

getShows();