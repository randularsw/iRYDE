import axios from "axios";

export function getServices(){
    return axios.get("http://localhost:4000/services/");
}