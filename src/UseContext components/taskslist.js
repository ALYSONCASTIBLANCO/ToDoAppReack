import React, {useEffect, useContext} from 'react';
import TaskContext from '../Context/Task/TaskContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
export default function TasksList(){
    const {tasks, getTasks, getDetails}=useContext(TaskContext);
    useEffect(()=>{
        getTasks();
        //console.log(tasks);
    },[]);
    return(
        <div className='maincontainer'>
        <ListGroup as="ol" numbered>
                        {
                tasks.map(task=>(
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <a className="links" href='#!' key={task._uuid} onClick={()=>getDetails(task._uuid)}> 
                        <div style={{backgroundColor:"transparent"}}className='ms-2 me-auto'>
                                {task.title}
                        </div>
                    </a>
                    <Button style={{padding: "5px", fontWeight:"bold"}} variant="warning">Edit Task</Button>
                    <Button style={{padding: "5px", fontWeight:"bold"}} variant="danger">Delete Task</Button>
                    </ListGroup.Item>
                ))}                        
        </ListGroup>

        </div>
    );
}