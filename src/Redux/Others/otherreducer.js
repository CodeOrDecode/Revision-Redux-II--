import { ERROR, LOADING } from "./actionitems";
let initialCon = {
    loading:false,
    error:false
}
export function otherreducer(state=initialCon,{type,payload}){
    switch(type){

        case LOADING:{
            return {
                ...state,
                loading:payload,
                error:false
            }
        }

        case ERROR:{
            return {
                ...state,
                loading:false,
                error:payload
            }
        }
        default:{
            return state
        }
    }

}