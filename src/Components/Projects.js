import React from 'react'
import { Card, CardHeader, CardImg, CardSubtitle, Container, CardBody, CardText } from 'reactstrap'

export default function Projects() {
  return (
    <div>
      <Container>
        <Card className="Card" style={{marginTop: "10px"}}>
          <CardHeader tag="h5">
            TasQue
          </CardHeader>
          <CardSubtitle tag="h6" style={{padding: "5px"}}>
            A developers solution to multi tasking
          </CardSubtitle>
          <CardBody>

          <CardImg alt="TasQue Image" src="./TasQueSS.png" width="100%" height="100%"/>


          TasQue is a multi-tasking solution for developers. This application allows a user to fine tune their google searches by only returning results 
          pertaining to the exact subject matter they are quarrying. This feature is powered by the RAPID search API. Along with the search feature, this 
          application also allows a user to create an in depth ToDo list, allowing the user to categorize their tasks in order to maintain a steady and 
          streamlined workflow.
          </CardBody>

        </Card>
        <Card className="Card" style={{marginTop: "10px"}}>
          <CardHeader tag="h5">
            SomBase
          </CardHeader>
          <CardSubtitle tag="h6" style={{padding: "5px"}}>
            A pocket sommelier
          </CardSubtitle>
          <CardBody>

          <CardImg alt="Som Base Image" src='./SomBaseSS.png' width="100%" height="100%" />

          SomeBase is an application intended to be used in the food service industry in addition / collaboration to a POS terminal. This application is 
          used partially by a restaurant manager, who has access to the backend database of wines, each wine entered would have a description, and various 
          other information that the employee can view in order to make a recommendation on any wine served in the establishment.
          </CardBody>
        </Card>
        <Card className="Card" style={{marginTop: "10px"}}>
          <CardHeader tag="h5">
            Algo Viz
          </CardHeader>
          <CardSubtitle tag="h6" style={{padding: "5px"}}>
            A Algorithm Visulaizer
          </CardSubtitle>
          <CardBody height="500px">

          <iframe width="100%" height="500px" src="https://www.youtube.com/embed/b2sKbZ90LSk" title="Algo-Viz 0.0.1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          AlgoViz is a desktop application intended to aid a student in the learning process of DataStructures and Algorithms by visualizing how various 
          algorithms affect and mutate a dataset. This project was built using OpenGL, PyGame, and C++ Library with a wrapper for python called PyImGUI.
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}
