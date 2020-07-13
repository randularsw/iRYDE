import axios from "axios";

export function getPromotions() {
  return axios.get("http://localhost:4000/promotions/");
}

export function addPromotions(data) {
  return axios.get("http://localhost:4000/promotions/add", data);
}
