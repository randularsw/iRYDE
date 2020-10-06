import axios from 'axios';

export function getCountSp(){
    //console.log(7777);
    return axios.get('http://localhost:4000/api/users/counts');
}

export function getCountVo(){
    return axios.get('http://localhost:4000/api/users/counts');
}

// export function getCountBookings(){
//     return axios.get('http://localhost:4000/counts/bookings');
// }

