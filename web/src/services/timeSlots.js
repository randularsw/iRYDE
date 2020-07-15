import axios from "axios";

export function getTimeSlots(id,date) {
  return axios.get("http://localhost:4000/timeslots/"+id+'/'+date);
}