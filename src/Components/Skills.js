import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Popover, PopoverBody, UncontrolledPopover, PopoverHeader } from 'reactstrap'
import { useState } from 'react'

export default function Skills() {
const [isDisplayed, setIsDisplayed] = useState({
  html: 0,
  css: 0,
  js: 0,
  react: 0,
  mongo: 0,
  express: 0,
  python: 0,
  sql: false
})

  const handlePopOver = (e) =>{
    let x = e.target.id
    let y = isDisplayed
    console.log(e)
    y[x] = !y[x]
    setIsDisplayed(y)
    }

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

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id='html' alt="HTML5 Badge" src='./HTMLPIC.png' />
                <UncontrolledPopover flip target='html' trigger='click'>
                  <PopoverBody>
                    html
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>

          </Col>
          <Col>

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id='css' alt="CSS3 Badge" src='./CSSIMG.png' />
                <UncontrolledPopover flip target='css' trigger='focus'>
                  <PopoverBody>
                    css
                  </PopoverBody>
                </UncontrolledPopover>
              </CardBody>
            </Card>

          </Col>
          <Col>

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id='js' alt="JavaScript Badge" src="./JAVASCRIPTIMG.png" />
                <UncontrolledPopover flip target='js' trigger='click'>
                  <PopoverHeader>
                    JavaScript
                  </PopoverHeader>
                  <PopoverBody>
                    JavaScript has provided me the ability to interprate and use UserInputed data from a click to a text entry into a form, along with this JS has also allowed me to minipulate the DOM in ways unimaginable without.
                  </PopoverBody>
                </UncontrolledPopover>
            </CardBody>
            </Card>

          </Col>
          <Col>

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id="react" alt="React image" src="./ReactImg.png" />
                <UncontrolledPopover flip target='react' trigger='click'>
                  <PopoverHeader>
                    React.js
                  </PopoverHeader>
                  <PopoverBody>
                    React.js is my primary front end JS framework. I've used React to create several front end / client facing projects including this website! along with native-react i am well versed in react base libraries like ReactStrap.
                  </PopoverBody>
                </UncontrolledPopover>
            </CardBody>
            </Card>

          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col>

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id='mongo' alt="Mongo DB image" src="./MongoDBIMG.png" />
                <UncontrolledPopover flip target='mongo' trigger='click'>
                  <PopoverHeader>
                    MongoDB
                  </PopoverHeader>
                  <PopoverBody>
                    I've used MongoDB to create and impliment non-relational data bases to store information from ToDo lists , to resturant wine list paring Dishes to specific wines using referenced data objects.
                  </PopoverBody>
                </UncontrolledPopover>
            </CardBody>
            </Card>

          </Col>
          <Col>

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id='express' alt="Express image" src="./ExpressImg.png" />
                <UncontrolledPopover flip target='express' trigger='click'>
                  <PopoverHeader>
                    Express
                  </PopoverHeader>
                  <PopoverBody>
                  Express is a backend framework I've used to create a server that can impliment a MondoDB database using the Mongoose Library. I've used this framwork in order to impliment full CRUD operations along with assisting in the creation of a RESTful API.
                  </PopoverBody>
                </UncontrolledPopover>
            </CardBody>
            </Card>

          </Col>
          <Col>

            <Card  className="Card drop-shadow" onClick={handlePopOver}>
              <CardBody>
                <CardImg id='python' alt='Python image' src='./Python.png' />
                <UncontrolledPopover flip target='python' trigger='click'>
                  <PopoverHeader>
                    Python3
                  </PopoverHeader>
                  <PopoverBody>
                    I've used Python3 to in order to manage SQL data bases...
                  </PopoverBody>
                </UncontrolledPopover>
            </CardBody>
            </Card>

          </Col>
          <Col>

            <Card  className="Card drop-shadow" >
              <CardBody >
                <CardImg id='sql' alt='SQL image' src='./SQL.png' />
                
                <UncontrolledPopover flip target='sql' trigger='click'> 
                   <PopoverBody>
                    hello world
                  </PopoverBody>
                </UncontrolledPopover>
            </CardBody>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
  }
