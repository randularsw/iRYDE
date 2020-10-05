import axios from "axios";

//insert 
export function add(id,data) {
    console.log(id,data)
  return axios.put("http://localhost:4000/sp/unavailabledates/"+id, data);
}

//get
export function getUnavailableDates(id){
  return axios.get("http://localhost:4000/sp/unavailabledates/"+id);
}