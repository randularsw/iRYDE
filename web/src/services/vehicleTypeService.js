import axios from 'axios';

export function addVehicleBrand(data){
    return axios.post('http://localhost:4000/vehicleTypes',data);
}

export function addVehicleModel(id,data){
    //console.log(id,data);
    return axios.put('http://localhost:4000/vehicleTypes/add/'+id,data);
}

export function getVehicleBrands(){
    return axios.get('http://localhost:4000/vehicleTypes');
}

export function getVehicleModels(){
    return axios.get('http://localhost:4000/vehicleTypes/model');
}

export function deleteVehicleBrand(id){
    return axios.delete(`http://localhost:4000/vehicleTypes/brand/${id}`);
}

export function deleteVehicleModel(id){
    return axios.delete('http://localhost:4000/vehicleTypes/model/${id}');
}