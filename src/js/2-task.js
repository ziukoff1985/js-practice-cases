import axios from 'axios';

// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію кнопкою "Load More"

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
const API_KEY = '17b255e445f4b5417effc585e89e7d25';

const container = document.querySelector('.js-movie-list');
const loadMore = document.querySelector('.js-load-more');

loadMore.addEventListener('click', onLoadMore);

let page = 1;

async function serviceMovie(page = 1) {
  const { data } = await axios(`${BASE_URL}${END_POINT}`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return data;
}

serviceMovie()
  .then(data => {
    container.insertAdjacentHTML('beforeend', createMarkup(data.results));

    if (data.page < data.total_pages) {
      loadMore.classList.replace('load-more-hidden', 'load-more');
    }
  })
  .catch(error => alert(error.message));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, release_date, original_title, vote_average }) => `
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
            <div class="movie-info">
                <h2>${original_title}</h2>
                <p>Release Date: ${release_date}</p>
                <p>Vote Average: ${vote_average}</p>
            </div>
        </li>
    `
    )
    .join('');
}

async function onLoadMore() {
  page += 1;
  loadMore.disabled = true;

  try {
    const data = await serviceMovie(page);
    container.insertAdjacentHTML('beforeend', createMarkup(data.results));

    if (data.page >= data.total_pages) {
      loadMore.classList.replace('load-more', 'load-more-hidden');
    }

    const card = document.querySelector('.movie-card');
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    alert(error.message);
  } finally {
    loadMore.disabled = false;
  }
}
