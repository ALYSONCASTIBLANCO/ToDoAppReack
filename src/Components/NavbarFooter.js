import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
export default function NavBarFooter(){
    return(
        <Container className='footernav'>
        <Navbar fixed='bottom' style={{justifyContent:"center"}} collapseOnSelect expand="lg">
            <Navbar.Brand>            
                <img className="footerimg" alt="task" src="images/notepad.png"/>
            </Navbar.Brand>
            <Navbar.Brand>
               <p className='footext'>Made in Colombia, 2024</p> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
    </Container> );
}