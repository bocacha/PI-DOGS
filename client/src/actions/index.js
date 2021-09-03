// export const GET_RAZA_DETAIL = "GET_RAZA_DETAIL";
// export const GET_RAZA_ALL = "GET_RAZA_ALL";
// export const GET_RAZA = "GET_RAZA";
// export const GET_TEMPERAMENTO = "GET_TEMPERAMENTO";
// export const SORT_RAZA = "SORT_RAZA";
// export const ASD = 'Razas-A-Z';
// export const DES = 'Razas-Z-A';

// export function getRazasAll() {
//     return function (dispatch){
//         return fetch(`https://api.thedogapi.com/v1/breeds?api_key={4fcbadf3-8a00-4d15-b2fa-fed2c2958b7b}`)        
//         .then(response => response.json())
//         .then(json => {
//             dispatch({type: GET_RAZA_ALL, payload : json})
//         })
//     }

// }


// export function getRazasDetails(id) {
//     return function (dispatch){
//         return fetch(`http://localhost:3001/dogs/${id}`)
//         .then(response => response.json())
//         .then(json => {
//             dispatch({type: GET_RAZA_DETAIL, payload : json})
//         })
//     }
// }

// export function getRaza(razaName) {
//     return function (dispatch){
//         return fetch(`http://localhost:3001/dogs?name=${razaName}`)
//         .then(response => response.json())
//         .then(json => {
//             dispatch({type: GET_RAZA, payload : json})
//         })
//     }
// }



// export function getTemperamentos() {
//     return function (dispatch){
//         return fetch(`http://localhost:3001/temperament`)
//         .then(response => response.json())
//         .then(json => {
//             dispatch({type: GET_TEMPERAMENTO, payload : json})
//         })
//     }
// }


// export function sort(orden, razas){
//     let razaSort = [...razas]

//     razaSort.sort(function (a,b){
//         var nombreA = a.name.toUpperCase();
//         var nombreB = b.name.toUpperCase();

//         if(orden === ASD){
//             if(nombreA < nombreB){
//                 return -1;
//             }
//             if(nombreA > nombreB){
//                 return 1
//             }
//             return 0
//         }
//         if(orden === DES){
//             if(nombreA < nombreB){
//                 return 1;
//             }
//             if(nombreA > nombreB){
//                 return -1
//             }
//             return 0
//         }
//         return null;
//         //agregado para funcionalidad
//     })
//     return function(dispatch){
//         dispatch({type: SORT_RAZA, payload: razaSort})
//     }
// }

// export function filtroTemp(razaActual, temperamento){
//     let filtro = [...razaActual];
//     filtro = filtro.filter(actual =>{
//         if(actual.temperament){
//             let razaTemp = actual.temperament.split(', ')
//             return razaTemp.includes(temperamento);
//         }else{
//             return false
//         }
//     })
//     return function(dispatch){
//         dispatch({type:SORT_RAZA, payload: filtro})
//     }
// }
import axios from 'axios';

export function getRazes (){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/razes`,{
        });
        return dispatch({
            type:'GET_RAZES', 
            payload: json.data
        })
    }
}
export function getTemperaments (){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/temperament`,{
        });
        return dispatch({
            type:'GET_TEMPERAMENTS', 
            payload: json.data
        })
    }
}

export function filterRazesByTemp (payload){
    return{
        type:'FILTER_BY_TEMP', 
        payload
    }
}

export function filterCreated(payload){
    return{
        type:'FILTER_CREATED',
        payload
    }
}