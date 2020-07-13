import axios from "axios";

export function getPromotions() {
  return axios.get("http://localhost:4000/promotions/");
}
