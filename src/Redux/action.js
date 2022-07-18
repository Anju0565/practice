import * as types from "./actionTypes";

export const getCountries = (data)=>{
    return{
        type: types.GET_COUNTRIES_SUCCESS,
        payload: data
    }
}