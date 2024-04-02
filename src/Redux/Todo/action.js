import { SHOWTODO } from "./actionitems";

export function showtodo(tododata){
    return {
        type:SHOWTODO,
        payload:tododata
    }

}