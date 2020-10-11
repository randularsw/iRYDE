import axios from "axios";

export function getPromotions(id) {
  console.log(id);
  return axios.get("https://i-ryde-backend.herokuapp.com/promotions/sp/" + id); //get promotions of specific service providers
}

export function addPromotions(data) {
  return axios.post("https://i-ryde-backend.herokuapp.com/promotions/add", data);
}

export function deletePromotions(id) {
  return axios.delete("https://i-ryde-backend.herokuapp.com/promotions/" + id);
}
