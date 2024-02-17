import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import TaskContext from '../Context/Task/TaskContext';
import Button from 'react-bootstrap/Button';
export default function Task(){
    const {selectedTask}=useContext(TaskContext);
    async function DoneEdit (id){
        const res=await fetch('https://crudapi.co.uk/api/v1/tasks',
        {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
        },
        body: JSON.stringify([{
            _uuid:id,
            completed:true
        }])});
        const data=await res.json();
        alert("Completed Task");        
    }

    var date=new Date();
    return(
        <>
        {selectedTask ? (<Card>
            <Card.Body>
                <div className='row justify-content-center'>
                <Card.Img style={{width:"40vw", height:"auto"}} variant='top' src='images/clock.webp'/>
                </div>
                <Card.Title style={{textAlign:"center", fontSize:"10vh"}}>{selectedTask.title}</Card.Title>
                <Card.Text style={{textAlign:"center"}}>{"ID (Paste in the space to edit or delete task): "+selectedTask._uuid}</Card.Text>

                <Card.Text style={{textAlign:"center"}}>{"Create at: "+date.toUTCString(selectedTask._created)}</Card.Text>
                <Card.Text style={{textAlign:"center"}}>{"Last time modified: "+date.toUTCString(selectedTask._modified)}</Card.Text>
                <div className='row justify-content-center'>
                    <Button style={{backgroundColor:"green", fontWeight:"bold"}}variant="primary" onClick={()=>DoneEdit(selectedTask._uuid)}>Mark as Done</Button>
                </div>
            </Card.Body>
        </Card>):(<h1>Task not found</h1>)}
        </>

    );
}