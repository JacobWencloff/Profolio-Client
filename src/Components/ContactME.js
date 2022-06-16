import React from 'react'
import { Card, CardBody, CardImg, Col, Container, Form, Input, Row } from 'reactstrap'

export default function ContactME() {
  return (
    <div>
      <Container>
        <Row>
          <h1>Contact me!</h1>
        </Row>
        <Row>
          <Col xs="6">
            <Form >
              <Input className='Card' style={{ marginTop: "10px" }} type='text' placeholder='Email'></Input>
              <Input className='Card' style={{ marginTop: "10px" }} type='text' placeholder='Name' />
              <Col sm={{ offset: 9, size: 3 }}>
                <Input style={{ marginTop: "10px" }} type="submit"></Input>
              </Col>
            </Form>
          </Col>
          <Col>
              <Card className='Card'>
                <div style={{paddingLeft: "5px"}}>
                  <p>Looking for other ways to get in contact with me ?</p>
                  <p>you can find me here also !</p>
                </div>
                <CardBody className='Card'>
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          Github
                          <CardImg alt="github" />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <CardBody>
                          LinkedIn
                          <CardImg alt="LinkedIn" />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
      
          </Col>
        </Row>
      </Container>
    </div>
  )
}
