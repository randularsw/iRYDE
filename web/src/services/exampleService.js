import axios from "axios";

export function getItems() {
  return axios.get("https://i-ryde-backend.herokuapp.com/api/items");
}
