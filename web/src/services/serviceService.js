import axios from "axios";

export function getServices(id){
    return axios.get("http://localhost:4000/services/sp/"+id);
}
