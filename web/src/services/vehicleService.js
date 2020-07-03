import axios from 'axios';

export function addVehicle(data){
    console.log('service',data);
    return axios.post('http://localhost:4000/vehicles',data);
}