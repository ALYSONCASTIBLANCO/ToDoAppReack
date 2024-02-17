import React, {useReducer} from "react";
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";

const TaskState=(props)=>{
    const intitialState={
        tasks:[],
        selectedTask: null,
    }
const[state, dispatch]=useReducer(TaskReducer, intitialState);
const getTasks=async ()=>{
    const res=await fetch('https://crudapi.co.uk/api/v1/tasks',
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
        },
        method:"GET"
    });
    const data=await res.json();
    dispatch({
        type:'GET_TASKS',
        payload:data.items 
    })
    //console.log(data.items);
}

const getDetails=async(id)=>{
    const res=await fetch('https://crudapi.co.uk/api/v1/tasks/'+id,
    {headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
    },
    method:"GET"
});
    const data=await res.json();
    dispatch({
        type:'GET_DETAILS',
        payload:data
    })
    //console.log(data);
}

return (<TaskContext.Provider value={{
    tasks:state.tasks,
    selectedTask:state.selectedTask,
    getTasks,
    getDetails,
}}>
    {props.children}
</TaskContext.Provider>);
}
export default TaskState;