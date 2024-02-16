import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import TaskContext from '../Context/Task/TaskContext';
import Button from 'react-bootstrap/Button';
export default function Task(){
    const {selectedTask}=useContext(TaskContext);
    var date=new Date();
    return(
        <>
        {selectedTask ? (<Card>
            <Card.Body>
                <div className='row justify-content-center'>
                <Card.Img style={{width:"40vw", height:"auto"}} variant='top' src='images/clock.webp'/>
                </div>
                <Card.Title style={{textAlign:"center", fontSize:"10vh"}}>{selectedTask.title}</Card.Title>
                <Card.Text style={{textAlign:"center"}}>{"Create at: "+date.toUTCString(selectedTask._created)}</Card.Text>
                <Card.Text style={{textAlign:"center"}}>{"Last time modified: "+date.toUTCString(selectedTask._modified)}</Card.Text>
                <div className='row justify-content-center'>
                    <Button variant="success">Mark as Done</Button>
                </div>
            </Card.Body>
        </Card>):(<h1>Task not found</h1>)}
        </>

    );
}