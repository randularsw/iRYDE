import axios from "axios";

export async function addUser(data) {
  try {
    const user = await axios.post("https://i-ryde-backend.herokuapp.com/api/users", data);
    localStorage.setItem("token", user.headers.token);
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}

export async function editUser(data) {
  try {
    const user = await axios.put(`https://i-ryde-backend.herokuapp.com/api/users/`, data);
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}

export async function addPhoto(data) {
  try {
    console.log(data);
    const user = await axios.put(`https://i-ryde-backend.herokuapp.com/api/users/photo`, data);
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}

export async function addPayment(data) {
  try {
    console.log(data);
    const user = await axios.put(
      `https://i-ryde-backend.herokuapp.com/api/users/payment`,
      data
    );
    return user.data;
  } catch (ex) {
    console.log("exception", ex);
  }
}

//get all service providers
export function getServiceProviders() {
  return axios.get("https://i-ryde-backend.herokuapp.com/api/users/sp");
}
//get special service providers
export function getUser(id) {
  return axios.get(`https://i-ryde-backend.herokuapp.com/api/users/${id}`);
}
export default {
  addUser,
  getServiceProviders,
  editUser,
  addPhoto,
  addPayment,
};
