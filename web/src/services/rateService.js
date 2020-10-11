import axios from "axios";

export function addRate(data) {
  console.log(data);
  return axios.post("https://i-ryde-backend.herokuapp.com/rating/", data);
}
//get specific sp rates
export function getRates(id) {
  return axios.get("https://i-ryde-backend.herokuapp.com/rating/" + id);
}
