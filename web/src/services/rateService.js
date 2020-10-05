import axios from "axios";

export function addRate(data) {
    console.log(data);
    return axios.post("http://localhost:4000/rating/",data);
  }