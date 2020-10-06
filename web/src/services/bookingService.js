import axios from "axios";

//insert booking data
export function addBooking(data) {
  return axios.post("http://localhost:4000/bookings", data);
}
//specific sp incoming appointments
export function getSpIncomingAppointments(id) {
  return axios.get("http://localhost:4000/bookings/sp/incoming/" + id);
}
//specific sp confirmed appointments
export function getSpConfirmedAppointments(id) {
  return axios.get("http://localhost:4000/bookings/sp/confirmed/" + id);
}
//specific sp finished appointments
export function getSpFinishedAppointments(id) {
  console.log(1111111111111111111111111111111111111, id);
  return axios.get("http://localhost:4000/bookings/sp/finished/" + id);
}
//specific vo incoming appointments
export function getVoPendingAppointments(id) {
  return axios.get("http://localhost:4000/bookings/vo/incoming/" + id);
}
//specific vo confirmed appointments
export function getVoConfirmedAppointments(id) {
  return axios.get("http://localhost:4000/bookings/vo/confirmed/" + id);
}
//specific vo finished appointments
export function getVoFinishedAppointments(id) {
  return axios.get("http://localhost:4000/bookings/vo/finished/" + id);
}
//specific vo canceled appointments
export function getVoCanceledAppointments(id) {
  return axios.get("http://localhost:4000/bookings/vo/canceled/" + id);
}
//update status
export function updateStatus(id, appointment) {
  return axios.patch(
    "http://localhost:4000/bookings/status/" + id,
    appointment
  );
}
//get isRated==false && status==finished
export function getRateModal(id) {
  return axios.get("http://localhost:4000/bookings/isRated/" + id);
}
