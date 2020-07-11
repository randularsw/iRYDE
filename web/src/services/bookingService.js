import axios from "axios";

//insert booking data
export function addBooking(data) {
  console.log("booking", data);
  return axios.post("http://localhost:4000/bookings", data);
}
