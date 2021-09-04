

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

export function getRazeName(name){
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/razes'+ name);
            return dispatch({
                type:'GET_RAZES_NAME', 
                payload: json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
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