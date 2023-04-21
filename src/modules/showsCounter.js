const countTag = document.getElementById('shows-count');
countTag.innerHTML = '';

const getShowsCount = async () => {
  const shows = document.getElementsByClassName('show-card');
  countTag.innerHTML = `(${shows.length})`;
};

export default getShowsCount;