import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export { getPictures };

const perPage = 15;

async function getPictures(name, page) {
  const KEY = '43226276-a07a0c17e428cfffb021b9b05';

  try {
    if (name.includes(' ')) {
      name = name.replace(/\s+/g, '+');
    }

    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return response;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry! The site is currently unavailable. Please try later!',
    });
    console.error(error.message);
  }
}