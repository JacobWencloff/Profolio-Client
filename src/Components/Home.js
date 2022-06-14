
import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'


export default function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="11">
                        <h1>Jacob Wencloff</h1>
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
