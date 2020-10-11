import axios from "axios";

export function getServices(id) {
  console.log(id);
  return axios.get("https://i-ryde-backend.herokuapp.com/services/sp/" + id); //get services of specific service providers
}

export function deleteServices(id) {
  return axios.delete("https://i-ryde-backend.herokuapp.com/services/" + id);
}
