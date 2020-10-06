import axios from "axios";
//add specific sp images to own gallery
export function addImage(id, data) {
  console.log(4444444444444444444444, id, data);
  return axios.put("http://localhost:4000/gallery/" + id, data);
}

export function getImages(id) {
  return axios.get("http://localhost:4000/gallery/" + id);
}
