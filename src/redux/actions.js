import { types } from "./types"

export const getValue = (param)=>{
    return{
        type:types.GET,
        payload:param
    }
}
