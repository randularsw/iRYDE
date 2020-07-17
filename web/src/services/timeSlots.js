import axios from "axios";

export function getTimeSlots(id,date) {
  return axios.get("http://localhost:4000/timeslots/"+id+'/'+date);
}

export function updateTimeSLot(id,data){
  console.log(4444,data);
  return axios.put('http://localhost:4000/timeslots/'+id,data);
}