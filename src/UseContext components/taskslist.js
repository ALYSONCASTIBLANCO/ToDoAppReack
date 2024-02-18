import React, {useEffect, useContext, useState} from 'react';
import TaskContext from '../Context/Task/TaskContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
export default function TasksList(){
    const {tasks, getTasks, getDetails}=useContext(TaskContext);
    const[show, setShow]=useState(false);
    const[showD, setShowD]=useState(false);
    const[values, setValues]=useState({
        id: "",
        title:""
    })
    async function handleSubmitEdit (e){
        const res=await fetch('https://crudapi.co.uk/api/v1/tasks',
        {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
        },
        body: JSON.stringify([{
            _uuid:values.id,
            title:values.title,
        }])});
        const data=await res.json();
        console.log(data);
        
    }

    async function handleSubmitDelete(e){
        const res=await fetch('https://crudapi.co.uk/api/v1/tasks',
        {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
        },
        body: JSON.stringify([{
            _uuid:values.id
        }])});
        const data=await res.json();
        console.log(data);
        //alert(values.id)
    }

    function DoneTask(done){
        if(done){
            return(<img className="icons" title='Done' alt='Done' src='/images/done-icon.webp'/>)
            
        }
        else{
            return (<img className="icons" title='Not done' alt='Not done' src='/images/notdone.png'/>)
        }
    }
    const handleChange=(e)=>{
        const {target}=e;
        const {name, value}=target;
        const newValues={
            ...values,
            [name]:value,
        }
        setValues(newValues)
    }
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    const handleShowD=()=>setShowD(true);
    const handleCloseD=()=>setShowD(false);



    useEffect(()=>{
        getTasks();
        //console.log(tasks);
    },[]);
    return(
        <Container>
            <ListGroup as="ol" numbered>
                {
                tasks.map(task=>(
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={task._uuid}>
                    <a className="links" href='#!'  onClick={()=>getDetails(task._uuid)}> 
                        <div style={{backgroundColor:"transparent"}}className='ms-2 me-auto'>
                                <h6 style={{display:"inline-block"}}>{task.title}</h6>
                                <div style={{ display:"inline-block", width:"30px", height:"auto", background:"transparent"}}>{DoneTask(task.completed)}</div>
                        </div>
                    </a>
                    </ListGroup.Item>
                ))}                    
            </ListGroup>
        <div className="row justify-content-center">
        <Button style={{padding: "5px", fontWeight:"bold"}} variant="primary" onClick={handleShow}>Edit Task</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit your task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmitEdit}>
                            <Form.Group>
                                <Form.Label>Task Id</Form.Label>
                                <Form.Control id="id" type="text" name="id" value={values.id} onChange={handleChange}/>
                                <Form.Label>Task Title</Form.Label>
                                <Form.Control id="title" type="text" name="title" value={values.title} onChange={handleChange} placeholder='Type your new task'/>
                            </Form.Group>
                            <Button type="submit" variant="primary" value="Submit">Edit Task</Button>                    
                        </Form>
                    </Modal.Body>
                </Modal>
                <br/>
                <Button style={{ backgroundColor: "red",padding: "5px", fontWeight:"bold"}} variant="primary" onClick={handleShowD}>Delete Task</Button>
                <Modal show={showD} onHide={handleCloseD} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete your task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmitDelete}>
                            <Form.Group>
                                <Form.Label>Task Id</Form.Label>
                                <Form.Control id="id" type="text" name="id" value={values.id} onChange={handleChange}/>
                            </Form.Group>
                            <Button type="submit" variant="primary" value="Submit">Delete Task</Button>                    
                        </Form>
                    </Modal.Body>
                </Modal>

        </div>

        </Container>
    );
}