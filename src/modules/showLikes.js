const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/likes';

const fetchLikes = async (name, h5Tag) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    result.forEach((el) => {
      if (el.item_id === name) {
        const countOfLikes = el.likes;
        if (countOfLikes === 1) {
          h5Tag.innerHTML = `${countOfLikes} like`;
        } else if (countOfLikes === 0) {
          h5Tag.innerHTML = '0 likes';
        } else {
          h5Tag.innerHTML = `${countOfLikes} likes`;
        }
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchLikes;