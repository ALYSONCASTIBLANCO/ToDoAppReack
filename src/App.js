import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TasksList from './UseContext components/taskslist';
import TaskState from './Context/Task/TaskState';
import Task from './UseContext components/task';
import NavBarFooter from './Components/NavbarFooter';
import NavBarMain2 from './Components/NavBarMain2';

function App() {
  return (
    <TaskState>
    <Container>
      <Row className='justify-content-md-center'>
        <NavBarMain2/>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <TasksList/>
        </Col>
        <Col md={6}>
          <Task/>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <NavBarFooter/>
      </Row>
    </Container>
    </TaskState>
    );
}

export default App;
