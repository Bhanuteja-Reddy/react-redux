import {LOGINAction} from './loginActionTypes';

export const LOGIN=()=>{
    return {
        type:LOGIN_ACTION,
        payload:{
            username:'',
            employmentId:''
        }
    }
}