import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://pixabay.com/api/',
  params: {
    key: "42226095-985f5f3f7d80b9b4b7d7fcb50",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
  }
});

export const searchImages = (q, page) => {
  return instance.get(`/?q=${q}&page=${page}`)
}