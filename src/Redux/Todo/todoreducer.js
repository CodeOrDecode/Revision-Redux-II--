import { SHOWTODO } from "./actionitems";


export function todoreducer(state=[],{type,payload}){
    switch(type){
        case SHOWTODO:{
            return payload
        }
        default:{
            return state;
        }
    }

}