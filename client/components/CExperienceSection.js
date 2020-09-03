import React, { Component } from 'react';
import Radium from 'radium'
import CExperiences from "./CExperiences.js"
import { Container, Row, Col } from 'react-bootstrap';



const styles = {
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 20,
    width: 100,
    display: 'inline-block',
    'hover':{
      backgroundColor: '#fae1e1',
      textDecoration: 'none'
    },
    'link':{
      color: 'black',
      textDecoration: 'none',
      textAlign: 'center'
    },
    'active': {
      color: 'black',
      textDecoration: 'none'
    }
  },
  titleStyle: {
    marginTop: 80,
    marginLeft: 20,
    fontWeight: 300,
    textAlign: 'left',
  },
  linkText: {
    font: 50,
    textAlign: 'center'
  }
}

class CExperienceSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white', marginTop: 50 }}>
        <Container>
          <Row style={{ marginTop: 50 }}>
            <Col lg="8">
              <h3 style={{ color: 'black', textAlign: "left" }}>Experiences like never before.</h3>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col lg="8">
              <p style={{ color: 'black' }}>Our love for innovation allows us to bring you experiences like never before. Whether it is our flagship ideation conferences to networking sessions with industry leaders, the Circle experience is....BLAH BLAH BLAH.</p>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ marginTop: 30 }}>
            <Col lg="4">
              <CExperiences img="../assets/filler.png" title="Versatile Experiences" desc="description"></CExperiences>
            </Col>
            <Col lg="4">
              <CExperiences img="../assets/filler.png" title="Versatile Experiences" desc="description"></CExperiences>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ marginTop: 30 }}>
            <Col lg="4">
              <CExperiences img="../assets/filler.png" title="Versatile Experiences" desc="description"></CExperiences>
            </Col>
            <Col lg="4">
              <CExperiences img="../assets/filler.png" title="Versatile Experiences" desc="description"></CExperiences>
            </Col>
          </Row>
          <Row style={{ backgroundColor: '#F5F5F5', borderRadius: 70, padding: 20 }}>
            <div className="col-lg-4 my-auto">
              <img src="../assets/compass.png" style={{ height: '50%' }} />
            </div>
            <Col lg="8">
              <p style={{ color: '#969696' }}>JULY 18 - JULY 19, 2020</p>
              <h3 style={{ color: 'black', textAlign: 'left' }}>Compass</h3>
              <p>Students from 17 universities across North America came together virtually and created innovative solutions to the most pressing issues of the education system.</p>
              <a href="">Learn More</a>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{marginTop: 50}}>
            <h4 style={{ color: 'black' }}>Never miss a Circle event</h4>
            <p>Get the latest updates from Circle right to your inbox.</p>
            
          </Row>
        </Container >
      </div >
    )
  }
}

export default CExperienceSection;

