import axios from "axios";

//insert booking data
export function addBooking(data) {
  console.log("booking", data);
  return axios.post("http://localhost:4000/bookings", data);
}
//specific sp incoming appointments
export function getIncomingAppointments(id){
  console.log(id);
  return axios.get("http://localhost:4000/bookings/incoming/" + id);
}
//update status
export function updateStatus(id,appointment){
  console.log(id,appointment);
  return axios.patch("http://localhost:4000/bookings/status/"+id,appointment);
}