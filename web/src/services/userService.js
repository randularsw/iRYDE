import axios from "axios";

export async function addUser(data) {
  try {
    const user = await axios.post("http://localhost:4000/api/users", data);
    localStorage.setItem("token", user.headers.token);
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}


//get all service providers
export function getServiceProviders() {
  return axios.get("http://localhost:4000/api/users/sp");
}
//get special service providers
export function getUser(id) {
  return axios.get(`http://localhost:4000/api/users/${id}`);
}
export default {
  addUser,
  getServiceProviders,
};
