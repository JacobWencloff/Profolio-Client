
import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardTitle, CardImg } from 'reactstrap'


export default function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="11">
                        <h1 className='text-shadow'>Jacob Wencloff</h1>
                    </Col>
                </Row>
                <Row>
                    <h5 className='text-shadow'>A Software Development Engineer</h5>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs="6">
                        <div className='drop-shadow'>
                        <Card className='Card' style={{marginTop: '50px'}}>
                            <CardTitle style={{paddingBottom: '0px', marginTop: '30px', marginLeft: '5px'}}>
                                <h2>Welcome To my Page!</h2>
                            </CardTitle>
                        
                                
                            <CardBody style={{marginTop: '0px', paddingTop: '0px'}}>
                                <p style={{ marginTop: "150px", fontSize: "20px" }}>I'm Software Engineer with a background in undergrad engineering disciplines pertaining to Microelectronics and Aerospace engineering.
                                    My experience helps me succeed in the field of Software Development and Engineering by practicing and maintaining the Engineering Design and Development process,
                                    allowing me to approach problems with a semantic method. I am extremely excited to begin my journey in this field and cant wait to connect with fellow engineers!</p>
                            </CardBody>
                        </Card>
                        </div>
                    </Col >
                    <Col>
                        <Card className='Card drop-shadow' style={{marginTop: '50px'}}>
                            <CardBody>
                                <CardImg src="./ProfilePicture.png" />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
