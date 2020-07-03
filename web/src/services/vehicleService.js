import axios from 'axios';

export function addVehicle(data){
    console.log('service',data);
    return axios.post('http://localhost:4000/vehicles',data);
}

export function getVehicles(id){
    console.log(id);
    return axios.get('http://localhost:4000/vehicles/'+id);
}