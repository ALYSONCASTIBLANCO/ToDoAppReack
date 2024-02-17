import {GET_TASKS, GET_DETAILS} from '../types';
export default (state, action)=>{
    const {payload, type}=action;
    switch (type) {
        case GET_TASKS:
            return{
                ...state,
                tasks:payload
            }
        case GET_DETAILS:
                return{
                    ...state,
                    selectedTask:payload
                }
    
        default:
            return state;
    }
}