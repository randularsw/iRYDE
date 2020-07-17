import axios from "axios";

export function getPromotions(id) {
  console.log(id);
  return axios.get("http://localhost:4000/promotions/" + id);
}

export function addPromotions(data) {
  return axios.post("http://localhost:4000/promotions/add", data);
}

export function deletePromotions(id) {
  return axios.delete("http://localhost:4000/promotions/" + id);
}
