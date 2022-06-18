import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap'

export default function Skills() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="11">
            <h1 className='text-shadow'>Skill's</h1>
          </Col>
        </Row>
        <Row>
          <p className='text-shadow'>Through my education at General Assembly, along with self driven passion projects, i've learned several computer
            languages and supporting libraries along with the ability to inpliment CRUD and a RESTful API interface!
            Below is a list of all of my current skills and practices </p>
        </Row>
        <Row>
          <Col>
            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt="HTML5 Badge" src='./HTMLPIC.png' />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt="CSS3 Badge" src='./CSSIMG.png' />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt="JavaScript Badge" src="./JAVASCRIPTIMG.png" />
            </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt="JavaScript Badge" src="./ReactImg.png" />
            </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt="JavaScript Badge" src="./MongoDBIMG.png" />
            </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt="JavaScript Badge" src="./ExpressImg.png" />
            </CardBody>
            </Card>
          </Col>
          <Col>

            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt='Python image' src='./Python.png' />
            </CardBody>
            </Card>

          </Col>
          <Col>

            <Card className="Card drop-shadow">
              <CardBody>
                <CardImg alt='SQL image' src='./SQL.png' />
            </CardBody>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
