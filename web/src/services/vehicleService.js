import axios from 'axios';

export function addVehicle(data){
    console.log('service',data);
    return axios.post('http://localhost:4000/vehicles',data);
}
//get all vehicles for specific vehicle owner
export function getVehicles(id){
    console.log(id);
    return axios.get('http://localhost:4000/vehicles/vo/'+id);
}

//get specific vehicle details
export function getVehicle(id){
    return axios.get('http://localhost:4000/vehicles/'+id);
}

//delete a vehicle
export function deleteVehicle(id){
    console.log('dddddddddd',id);
    return axios.delete('http://localhost:4000/vehicles/'+id);
}