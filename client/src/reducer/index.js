//import {GET_RAZA_DETAIL, GET_RAZA_ALL, GET_RAZA, GET_TEMPERAMENTO, SORT_RAZA} from '../actions/index'

const initialState = { 
    razes : [],
    allRazes:[],
    // razasDetail : {},
    temperaments : []
   
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_RAZES':
            return {
                ...state,
                razes: action.payload,
                allRazes: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload

            }
        case 'ORDER_BY_NAME':
            let sortedArr = action.payload ==='asc'?
            state.razes.sort(function(a,b) {
                if (a.name > b.name){
                    return 1;
                }
                if (b.name > a.name){
                    return -1;
                }
                return 0;
            }) :
            state.razes.sort(function(a,b){
                if (a.name > b.name){
                    return -1;
                }
                if (b.name > a.name){
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                razes: sortedArr
            }
        case 'GET_RAZES_NAME':
            return {
                ...state,
                razes: action.payload
            }
        case 'FILTER_BY_TEMP':
            var chainOfTemps;
            const allRazes = state.allRazes
            const razesFiltered = allRazes.filter(el => el.temperaments.includes(action.payload))
            return{
                ...state,
                razes: razesFiltered
            }
        case 'FILTER_CREATED':
            const allRazes2 = state.allRazes
            const createdFilter = action.payload ==='created'? allRazes2.filter(el =>el.createdInDb): allRazes2.filter(el =>!el.createdInDb)
            return{
                ...state,
                razes: createdFilter
            }

        
        default : return state
    }
}
    // if(action.type === GET_RAZA_ALL) {
    //     return {
    //         ...state,
    //         razas : action.payload
    //     }
    // }

    // if(action.type === GET_RAZA_DETAIL) {
    //     return {
    //         ...state,
    //         razasDetail : action.payload
    //     }
    // }

    // if(action.type === GET_RAZA) {
    //     return {
    //         ...state,
    //         razas : action.payload
    //     }
    // }



    // if(action.type === GET_TEMPERAMENTO) {
    //     return {
    //         ...state,
    //         temperamento : action.payload
    //     }
    // }


    // if(action.type === SORT_RAZA) {
    //     return {
    //         ...state,
    //         razas : action.payload
    //     }
    // }

//     return state;
// }

 export default rootReducer;