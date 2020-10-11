import axios from 'axios';

export function addVehicle(data){
    console.log('service',data);
    return axios.post('https://i-ryde-backend.herokuapp.com/vehicles',data);
}
//get all vehicles for specific vehicle owner
export function getVehicles(id){
    console.log(id);
    return axios.get('https://i-ryde-backend.herokuapp.com/vehicles/vo/'+id);
}

//get specific vehicle details
export function getVehicle(id){
    return axios.get('https://i-ryde-backend.herokuapp.com/vehicles/'+id);
}

//delete a vehicle
export function deleteVehicle(id){
    console.log('dddddddddd',id);
    return axios.delete('https://i-ryde-backend.herokuapp.com/vehicles/'+id);
}