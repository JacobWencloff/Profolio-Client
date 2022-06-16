import React from 'react'
import { Card, CardBody, Col, Container, Form, Input, Row } from 'reactstrap'

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
              <Input type='text' placeholder='Email'></Input>
              <Input type='text' placeholder='Name' />
              <Col sm={{offset: 9, size: 3}}>
                <Input type="submit"></Input>
              </Col>
            </Form>
          </Col>
          <Col>
            <p>Looking for other ways to get in contact with me ?</p>
            <p>you can find me here also !</p>
            <Row>
            <Col>
              <Card>
                <CardBody>
                  hello
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  hello
                </CardBody>
              </Card>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
