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

const serviceProviders = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "LAUGFS CarCare",
    email: "LAUGFSCarCare@gmail.com",
    address: "25/p,pannipitya",
    profileImage:
      "https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2016/11/yimg_09384I-640x338.jpg",
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRku3IvlGnEq7Bn3mlC-vZqrtFu8a-jwXsoqA&usqp=CAU",
    contact: 5556555458,
    ratings: [
      { _id: "1332256", rate: 3, review: "fgtgygyuhuuuuhu" },
      { _id: "1332255", rate: 3, review: "fgtgygyuhuuuuhu" },
    ],
    services: [
      {
        _id: "1332256",
        title: "oil change",
        description: "hghdg hsgysgy hgaygyst",
        image: "assets/images/sp/laugfsCarCare.jpg",
      },
      {
        _id: "1332255",
        title: "oil change",
        description: "dyhujdidokjdi",
        image: "assets/images/sp/laugfsCarCare.jpg",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Micro CarCare",
    email: "Micro CarCare",
    address: "544/jhjhjhjhj",
    profileImage: "https://ioes18.wildapricot.org/Resources/AM/Micro.jpg",
    contact: 55565,
    ratings: [
      { _id: "1332256", rate: 3, review: "fgtgygyuhuuuuhu" },
      { _id: "1332255", rate: 3, review: "fgtgygyuhuuuuhu" },
    ],
    services: [
      {
        _id: "1332256",
        title: "oil change",
        description: "hghdg hsgysgy hgaygyst",
        image: "assets/images/sp/laugfsCarCare.jpg",
      },
      {
        _id: "1332255",
        title: "oil change",
        description: "dyhujdidokjdi",
        image: "assets/images/sp/Micro.jpg",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Auto Miraj",
    email: "Auto Miraj",
    address: "Auto Miraj",
    profileImage: "https://ioes18.wildapricot.org/Resources/AM/Micro.jpg",
    contact: 55565,
    ratings: [
      { _id: "1332256", rate: 3, review: "fgtgygyuhuuuuhu" },
      { _id: "1332255", rate: 3, review: "fgtgygyuhuuuuhu" },
    ],
    services: [
      {
        _id: "1332256",
        title: "oil change",
        description: "hghdg hsgysgy hgaygyst",
        image: "assets/images/sp/laugfsCarCare.jpg",
      },
      {
        _id: "1332255",
        title: "oil change",
        description: "dyhujdidokjdi",
        image: "assets/images/sp/Micro.jpg",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "AMW Service Center",
    email: "AMW Service Center",
    address: "AMW Service Center",
    profileImage: "https://ioes18.wildapricot.org/Resources/AM/Micro.jpg",
    contact: 55565,
    ratings: [
      { _id: "1332256", rate: 3, review: "fgtgygyuhuuuuhu" },
      { _id: "1332255", rate: 3, review: "fgtgygyuhuuuuhu" },
    ],
    services: [
      {
        _id: "1332256",
        title: "oil change",
        description: "hghdg hsgysgy hgaygyst",
        image:
          "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      },
      {
        _id: "1332255",
        title: "oil change",
        description: "dyhujdidokjdi",
        image:
          "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      },
    ],
  },
];

export function sp() {
  return serviceProviders;
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
