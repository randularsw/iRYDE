import axios from 'axios';

export function addVehicleBrand(data){
    return axios.post('https://i-ryde-backend.herokuapp.com/vehicleTypes',data);
}

export function addVehicleModel(id,data){
    //console.log(id,data);
    return axios.put('https://i-ryde-backend.herokuapp.com/vehicleTypes/add/'+id,data);
}

export function getVehicleBrands(){
    return axios.get('https://i-ryde-backend.herokuapp.com/vehicleTypes');
}

export function getVehicleModels(){
    return axios.get('https://i-ryde-backend.herokuapp.com/vehicleTypes/model');
}

export function deleteVehicleBrand(id){
    return axios.delete(`https://i-ryde-backend.herokuapp.com/vehicleTypes/brand/${id}`);
}

export function deleteVehicleModel(id){
    return axios.delete('https://i-ryde-backend.herokuapp.com/vehicleTypes/model/${id}');
}