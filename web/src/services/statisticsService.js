import axios from "axios";

export function getCountSp() {
  //console.log(7777);
  return axios.get("http://localhost:4000/api/users/counts");
}

export function getCountVo() {
  return axios.get("http://localhost:4000/api/users/counts");
}

export function getCountBookings() {
  return axios.get("http://localhost:4000/count/");
}
export function getAllBookings() {
  return axios.get("http://localhost:4000/bookings/all-bookings");
}

export function getSB() {
  return axios.get("http://localhost:4000/api/users/sp");
}
export function getVO() {
  return axios.get("http://localhost:4000/api/users/vo");
}

export function getFinishedBookings() {
  return axios.get("http://localhost:4000/bookings/sp/finished/bookings");
}
// export function getCountBookings(){
//     return axios.get('http://localhost:4000/counts/bookings');
// }
