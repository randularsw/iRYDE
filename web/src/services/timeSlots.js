import axios from "axios";

export function getTimeSlots(id,date) {
  return axios.get("https://i-ryde-backend.herokuapp.com/timeslots/"+id+'/'+date);
}

export function updateTimeSLot(id,data){
  console.log(4444,data);
  return axios.put('https://i-ryde-backend.herokuapp.com/timeslots/'+id,data);
}