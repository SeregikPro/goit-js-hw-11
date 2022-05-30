import axios from 'axios';

const API_KEY = '27753875-4818926c6f388dfe94d58e19a';

const URL = 'https://pixabay.com/api/';

export async function getSearchResult(searchString = '', per_page, page) {
  const options = {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };
  const searchURI = `${URL}?key=${API_KEY}&q=${searchString}&per_page=${per_page}&page=${page}`;
  return await axios.get(searchURI, options);
}