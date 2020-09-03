import axios from "axios";

export function getServices(id) {
  console.log(id);
  return axios.get("http://localhost:4000/services/sp/" + id); //get promotions of specific service providers
}

export function deleteServices(id) {
  return axios.delete("http://localhost:4000/services/" + id);
}
