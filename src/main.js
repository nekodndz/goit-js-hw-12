import { createMarkup } from './js/render-functions';
import { getPictures } from './js/pixabay-api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const formSearch = document.querySelector('.search-form');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoader = document.querySelector('.load-btn');
const loaderMore = document.querySelector('.loader-more');
const endLoader = document.querySelector('.loader-message');
let currentPage = 1;
const perPage = 15;
let inputSearch = '';
let simpleLightboxExem;

loader.style.display = 'none';
loaderMore.style.display = 'none';
btnLoader.style.display = 'none';
endLoader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
btnLoader.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentPage = 1;
  listImages.innerHTML = '';
  loader.style.display = 'block';
  btnLoader.style.display = 'none';
  endLoader.style.display = 'none';

  inputSearch = event.target.elements.search.value.trim();

  if (!inputSearch) {
    iziToast.warning({
      title: 'Caution',
      message: 'Sorry, but you did not fill out the field!',
      position: 'topRight',
      close: false,
    });
    loader.style.display = 'none';
    return;
  }

  try {
    const { data } = await getPictures(inputSearch, currentPage);

    loader.style.display = 'none';

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (currentPage === totalPages) {
      btnLoader.style.display = 'none';
      endLoader.style.display = 'block';
    } else {
      btnLoader.style.display = 'block';
    }

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        close: false,
      });

      btnLoader.style.display = 'none';
      loaderMore.style.display = 'none';
      endLoader.style.display = 'block';

      return;
    }

    listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));

    simpleLightboxExem = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();

    formSearch.reset();
  } catch (error) {
    loader.style.display = 'none';
    console.log(error);
  }
}

async function onLoadMore() {
  currentPage += 1;

  loaderMore.style.display = 'block';
  btnLoader.style.display = 'none';
  endLoader.style.display = 'none';

  try {
    const { data } = await getPictures(inputSearch, currentPage);

    listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));

    window.scrollBy({
      top: listImages.lastElementChild.getBoundingClientRect().height * 2,
      left: 0,
      behavior: 'smooth',
    });

    simpleLightboxExem.refresh();

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (currentPage === totalPages) {
      iziToast.info({
        title: 'Caution',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        close: false,
      });

      btnLoader.style.display = 'none';
      loaderMore.style.display = 'none';
      endLoader.style.display = 'block';

      return;
    }

    loaderMore.style.display = 'none';
    btnLoader.style.display = 'block';
  } catch (error) {
    console.log(error);
  }
}
