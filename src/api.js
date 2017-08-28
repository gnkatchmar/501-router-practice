const API_KEY = "d2da05e5823d4073aa18f6715ca015f8";
const URL = "https://api.giphy.com/v1/gifs";

export const search = searchTerm => {
  return fetch(
    `${URL}/search?api_key=${API_KEY}&q=${searchTerm}`,
  ).then(res => res.json());
};

export const trending = () => {
  return fetch(
    `${URL}/trending?api_key=${API_KEY}`,
  ).then(res => res.json());
}