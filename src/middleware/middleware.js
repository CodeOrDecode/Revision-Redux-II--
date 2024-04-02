export const middlewaredepen = (store) => (next) => (action) => {
    console.log(action);
    if(action.type == "SHOWTODO"){
        action.payload=[{
            id:4,
            title:"jjjj",
            status:false
        }]
    }
    next(action);
}