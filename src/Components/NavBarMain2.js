import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
export default function NavBarMain2(){
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
                    <img title="Add a new task" alt="Add a new task" className="add"src="images/png_plus.png"/>
                </Navbar.Brand>
                <Navbar.Brand>
                    <img title="Contact me" alt="Contact me" className="add"src="images/whatsapp.webp"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
        </Container>
    );
}