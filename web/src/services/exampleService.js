import axios from "axios";

export function getItems() {
  return axios.get("http://localhost:4000/api/items");
}
