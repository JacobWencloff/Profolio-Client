import React from 'react'
import { Card, CardBody, CardImg, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function ContactME() {
  return (
    <div>
      <Container>
        <Row>
          <h1 className='text-shadow'>Contact me!</h1>
        </Row>
        <Row>
          <Col xs="6">
            <Form >
              <FormGroup floating>
                <Input className='Card drop-shadow' style={{ marginTop: "10px" }} type='email' placeholder='Email'></Input>
                <Label style={{color: 'black'}}> Email </Label>
              </FormGroup>
              {' '}
              <FormGroup floating>
                <Input className='Card drop-shadow' style={{ marginTop: "10px" }} type='text' placeholder='Name' />
                <Label style={{color: 'black'}} > Name </Label>
              </FormGroup>
              <FormGroup floating>
                <Input className='Card drop-shadow' style={{ marginTop: "10px", minHeight: '100px' }} type="textarea" placeholder='Notes / Comments'></Input>
                <Label style={{color: 'black'}}> Notes / Comments</Label>

              </FormGroup>
              <Col sm={{ offset: 9, size: 3 }}>
                <Input className='drop-shadow' style={{ marginTop: "10px" }} type="submit"></Input>
              </Col>
            </Form>
          </Col>
          <Col>
              <Card className='Card drop-shadow'>
                <div style={{paddingLeft: "5px"}}>
                  <p>Looking for other ways to get in contact with me ?</p>
                  <p>you can find me here also !</p>
                </div>
                <CardBody className='Card'>
                  <Row>
                    <Col>
                      <Card className='Card' >
                        <CardBody >
                           <a href='https://github.com/JacobWencloff' target="_blank">
                            < CardImg alt="github" src='./github-logo.png' ></CardImg>
                            </a>
                        </CardBody>
                      </Card >
                    </Col>
                    <Col>
                      <Card className='Card'>
                        <CardBody>
                          <a href='https://www.linkedin.com/in/jacob-wencloff-se/' target="_blank">
                            <CardImg alt="LinkedIn" src='./LinkedIn.png'/>
                          </a>
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
