import axios from "axios";

export function getCountSp() {
  //console.log(7777);
  return axios.get("https://i-ryde-backend.herokuapp.com/api/users/counts");
}

export function getCountVo() {
  return axios.get("https://i-ryde-backend.herokuapp.com/api/users/counts");
}

export function getCountBookings() {
  return axios.get("https://i-ryde-backend.herokuapp.com/count/");
}
export function getAllBookings() {
  return axios.get("https://i-ryde-backend.herokuapp.com/bookings/all-bookings");
}

export function getSB() {
  return axios.get("https://i-ryde-backend.herokuapp.com/api/users/sp");
}
export function getVO() {
  return axios.get("https://i-ryde-backend.herokuapp.com/api/users/vo");
}

export function getFinishedBookings() {
  return axios.get("https://i-ryde-backend.herokuapp.com/bookings/sp/finished/bookings");
}
// export function getCountBookings(){
//     return axios.get('http://localhost:4000/counts/bookings');
// }
