import axios from "axios";

//insert 
export function add(id,data) {
    console.log(id,data)
  return axios.put("https://i-ryde-backend.herokuapp.com/sp/unavailabledates/"+id, data);
}

//get
export function getUnavailableDates(id){
  return axios.get("https://i-ryde-backend.herokuapp.com/sp/unavailabledates/"+id);
}