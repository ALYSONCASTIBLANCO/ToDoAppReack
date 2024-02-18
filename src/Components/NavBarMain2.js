import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
export default function NavBarMain2(){
    const [toggle, setToggle]=useState(false);
    const handleToggleOpen=()=>setToggle(true);
    const handleToggleClose=()=>setToggle(false);
    const[values, setValues]=useState({
        title:""
    })
    const [actualState, changeCheckState] =useState(false);
    const handleCheckbox = (e) => {
        changeCheckState(e.target.checked);
    }
    const handleChange=(e)=>{
        const{target}=e;
        const {name, value}=target;
        const newValues={
            ...values,
            [name]:value
        };
        setValues(newValues);
    }
    async function createTask(){
        
        const res=await fetch('https://crudapi.co.uk/api/v1/tasks',
        {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
        },
        body: JSON.stringify([{
            title:values.title,
            completed:actualState
        }])});
        const data=await res.json();
        console.log(data);
        

        //alert(values.title+" "+actualState)  
     }
    return(
        <Container className='NavBarHeader'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>            
                    <img className="headerimg" alt="task" src="images/notepad.png"/>
                </Navbar.Brand>
                <Navbar.Brand>
                   <p className='title'>YourTaskAPI.com Don't forget your daily tasks</p> 
                </Navbar.Brand>
                <Navbar.Brand>
                    <a onClick={handleToggleOpen}>
                        <img title="Add a new task" alt="Add a new task" className="add"src="images/png_plus.png"/>
                    </a>
                    <Modal show={toggle} onHide={handleToggleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create your task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={createTask}>
                                <Form.Group>
                                    <Form.Label>Task Title</Form.Label>
                                    <Form.Control id="title" type="text" value={values.title} name="title" onChange={handleChange} placeholder='Type your new task'/>
                                </Form.Group>
                                <Form.Check onChange={handleCheckbox} checked={actualState} type="checkbox" label="Completed task?" id="checkbox"/>
                                <Button type="submit" variant="primary" value="Submit" >Create Task</Button>                    
                            </Form>
                        </Modal.Body>
                        </Modal>       

                </Navbar.Brand>
                <Navbar.Brand>
                    <a target="_blank" href="tel:+573123949192">
                        <img title="Contact me" alt="Contact me" className="add"src="images/whatsapp.webp"/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
        </Container>
    );
}