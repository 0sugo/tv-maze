const countTag = document.getElementById('shows-count');

if (countTag !== null) {
  countTag.innerHTML = '';
}

const getShowsCount = async () => {
  const shows = document.getElementsByClassName('show-card');

  if (countTag !== null) {
    countTag.innerHTML = `(${shows.length})`;
  }
};

export default getShowsCount;
