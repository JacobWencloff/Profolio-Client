import logo from './logo.svg';
import { Link, Routes, Route } from "react-router-dom"
import { Container, Row, Col, Button, Offcanvas, OffcanvasBody } from 'reactstrap'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects'
import ContactMe from './Components/ContactME'

function App() {
  const [isActive, setIsActive] = useState(false)
  const [hamburger, setHamburger] = useState('|||')

  const handleNav = (e) =>{
    if(isActive === false){
        setIsActive(true)
        setHamburger('X')
    }else{
        setIsActive(false)
        setHamburger('|||')
    }
}

  return (
    <div className="App">
      <Offcanvas style={{ height: "100px" }} direction='top' isOpen={isActive} onClick={handleNav}>
        <OffcanvasBody className='Card' style={{ opacity: "1" }}>
          <Container>
            <Row>
              <Col>
                <Link to="/Skills">
                  <Button className='nav-drop-shadow' style={{ opacity: "1" }}>Skills</Button>
                </Link>
              </Col>
              <Col>
                <Link to="/Projects">
                  <Button className='nav-drop-shadow'>Projects</Button>
                </Link>
              </Col>
              <Col>
                <Link to="/ContactMe">
                  <Button className='nav-drop-shadow'>Contact Me</Button>
                </Link>
              </Col>
              <Col>
              <Link to="/">
                <Button className='nav-drop-shadow'>Home</Button>
              </Link>
              </Col>
            </Row>
          </Container>
        </OffcanvasBody>
      </Offcanvas>
      <Container>
        <Row>
          <Col sm="11">
          </Col>
          <Col sm="1">
            <Button className='drop-shadow' style={{marginTop: '10px'}} onClick={handleNav}>{hamburger}</Button>
          </Col>
        </Row>
      </Container>
      <Link to='/' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/ContactMe' element={<ContactMe />} />
      </Routes>

    </div>
  );
}

export default App;
