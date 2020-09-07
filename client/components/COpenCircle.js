import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Radium from 'radium'

const styles = {
    openSquare: {
        backgroundColor: '#181818',
        borderRadius: 40,
        height: 300,
        marginBottom: 20,
    },
    title: {
        background: 'linear-gradient(45deg, #CF10FF, #0DD3EE)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
    },
}


class COpenCircle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <Container>
                    <p style={{ textAlign: 'center' }}>INTRODUCING</p>
                    <h2 style={styles.title}>Open Circle</h2>
                    <h5 style={{ color: 'white', fontWeight: 500, marginTop: 15 }}>An innovative project hub.</h5>
                    <Row className="justify-content-center">
                        <Col lg="8" style={{ marginTop: 20 }}>
                            <p style={{ textAlign: 'center' }}>We believe that ideas should be curated with collaboration. With Open Circle, we are bringing you an opportunity to collaborate with people of different skillsets on a project you are passionate about. Choose from current projects available or submit your own idea to propel it forward!</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col lg="6" style={{ marginTop: 20 }}>
                            {/* <a href="" className="openButton" style={{color: '#1B1B1B'}}>EXPLORE OPEN CIRCLE</a> */}
                            <p style={{ textAlign: 'center' }}>
                                <a href="/open-circle" className="openButton" style={{ color: '#1B1B1B' }}>Explore Open Circle</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row >
                        <Col lg="4">
                            <div style={styles.openSquare}></div>
                            <div style={styles.openSquare}></div>
                        </Col>
                        <Col lg="4" style={{marginTop: 150}}>
                            <div style={styles.openSquare}></div>
                            <div style={styles.openSquare}></div>
                        </Col>
                        <Col lg="4">
                            <div style={styles.openSquare}></div>
                            <div style={styles.openSquare}></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Radium(COpenCircle);