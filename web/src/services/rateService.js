import axios from "axios";

export function addRate(data) {
  console.log(data);
  return axios.post("http://localhost:4000/rating/", data);
}
//get specific sp rates
export function getRates(id){
  return axios.get("http://localhost:4000/rating/"+id);
}
