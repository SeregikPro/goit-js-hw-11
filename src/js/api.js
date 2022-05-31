import axios from 'axios';

export default class imageApiService {
  constructor() {
    this.API_KEY = '27753875-4818926c6f388dfe94d58e19a';
    this.URL = 'https://pixabay.com/api/';
    this.page = 1;
    this.searchString = '';
  }

  async fetchImages() {
    const searchParameters = new URLSearchParameters({
      key: this.KEY,
      q: this.searchString,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: this.page,
    });
    const response = await axios.get(`${this.URL}?${searchParameters}`);
    this.incrementPage();
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchString;
  }

  set query(newQuery) {
    this.searchString = newQuery;
    this.resetPage();
  }
}