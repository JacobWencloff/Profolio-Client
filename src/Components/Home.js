
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import {useState} from 'react'
import { Offcanvas } from 'reactstrap'
import { OffcanvasBody } from 'reactstrap'

export default function Home() {
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
        <div>
            <Offcanvas style={{height: "100px"}} direction='top' isOpen={isActive} onClick={handleNav}>
                <OffcanvasBody style={{opacity: "1"}}>
                    <Container>
                        <Row>
                            <Col>
                            <Link to="/Skills">
                                <Button style={{opacity: "1"}}>Skills</Button>
                            </Link>
                            </Col>
                            <Col>
                                <Button>Projects</Button>
                            </Col>
                            <Col>
                                <Button>Contact Me</Button>
                            </Col>
                        </Row>
                    </Container>
                </OffcanvasBody>
            </Offcanvas>
            <Container>
                <Row>
                    <Col sm="11">
                        <h1>Jacob Wencloff</h1>
                    </Col>
                    <Col sm="1"> 
                        <Button onClick={handleNav}>{hamburger}</Button>
                    </Col>
                </Row>
                <Row>
                    <h5>A Software Development Engineer</h5>
                </Row>
            </Container>
            <Container>
                <p style={{ marginTop: "150px" }}>I'm Software Engineer with a background in undergrad engineering disciplines pertaining to Microelectronics and Aerospace engineering.
                    My experience helps me succeed in the field of Software Development and Engineering by practicing and maintaining the Engineering Design and Development process,
                    allowing me to approach problems with a semantic method. I am extremely excited to begin my journey in this field and cant wait to connect with fellow engineers!</p>
            </Container>
        </div>
    )
}
