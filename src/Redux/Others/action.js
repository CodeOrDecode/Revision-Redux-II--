import { ERROR, LOADING } from "./actionitems";

export function loadingcon(value){

    return {type:LOADING,payload:value}
}


export function errorVal(value){

    return {type:ERROR,payload:value}
}
