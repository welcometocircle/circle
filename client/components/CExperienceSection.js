import React, { Component } from 'react';
import Radium from 'radium'
import CExperiences from "./CExperiences.js"
import { Container, Row, Col } from 'react-bootstrap';
import CEmailForm from "./CEmailForm.js"


const styles = {
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 20,
    width: 100,
    display: 'inline-block',
    'hover': {
      backgroundColor: '#fae1e1',
      textDecoration: 'none'
    },
    'link': {
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
  },
  emailForm: {
    fontSize: 90,
    lineHeight: 30,
    color: 'green',
    paddingLeft: '2vw',
    paddingRight: '2vw'
  },

}

class CExperienceSection extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth };
  }

  render() {

    var compassHeight;
    var compassTopMargin;
    var compassBottomMargin;
    if (this.state.width < 576) {
      compassHeight = '150px'
      compassBottomMargin = "20px"
    } else if (this.state.width < 1100) {
      compassHeight = '150px'
    } else {
      compassHeight = '200px'
      compassTopMargin = "30px"
    }


    return (
      <div style={{ backgroundColor: 'white', marginTop: 50 }}>
        <Container>
          <Row style={{ marginTop: 50 }}>
            <Col lg="10">
              <h2 style={{ color: 'black', textAlign: "left" }}>Experiences like never before.</h2>
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
          <Row className="justify-content-center" style={{ backgroundColor: '#F5F5F5', borderRadius: 70, padding: 20 }}>
            <Col lg="3" sm="12">

              <img src="../assets/compass.png" style={{ height: compassHeight, margin: 'auto', marginTop: compassTopMargin, marginBottom: compassBottomMargin, display: 'block', }} />

            </Col>
            <Col lg="9">
              <p style={{ color: '#969696' }}>JULY 18 - JULY 19, 2020</p>
              <h3 style={{ color: 'black', textAlign: 'left' }}>Compass</h3>
              <p>Students from 17 universities across North America came together virtually and created innovative solutions to the most pressing issues of the education system.</p>
              <p>
                <a href="/conferences" className="aButton">Learn More</a>
              </p>
            </Col>
          </Row>
          <h5 style={{ color: 'black', marginTop: 30, marginBottom: 20 }}>Never miss a Circle event</h5>
          <p style={{ textAlign: 'center', marginBottom: 20 }}>Get the latest updates from Circle<br /> right to your inbox.</p>
          <CEmailForm />
          <p style={{ textAlign: 'center', fontSize: "10px", marginBottom: 50 }}>We respect your privacy.</p>
        </Container >
      </div >
    )
  }
}

export default CExperienceSection;

