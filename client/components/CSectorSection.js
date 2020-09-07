import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const styles = {
    sectorStyle: {
        backgroundColor: '#1F2022',
        borderRadius: 25,
        height: 300,
        width: 300,
    },
    titleStyle: {
        marginTop: 140,
        // marginLeft: 20,
        fontWeight: 300,
        textAlign: 'left',
    }
}

class CSectorSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ marginTop: 30 }}>
                
                    <div className="justify-content-center">
                        <p style={{ textAlign: 'center' }}>SECTOR</p>
                        <h1>All 4 One.</h1>
                        <p style={{ textAlign: 'center' }}>Designed with core sectors in mind, Circle integrates science, technology, business, and social science to bring solutions to the issues we face today.</p>
                    </div>
                    <Row className="justify-content-center" style={{ marginTop: 30 }}>
                        <Col lg="4">
                            <CSectors img="https://hellocircle.ca/assets/business.png" title="Business"></CSectors>
                        </Col>
                        <Col lg="4">
                            <CSectors img="https://hellocircle.ca/assets/tech.png" title="Technology"></CSectors>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{ marginTop: 30 }}>
                        <Col lg="4">
                            <CSectors img="https://hellocircle.ca/assets/socialsci.png" title="Social Science"></CSectors>
                        </Col>
                        <Col lg="4">
                            <CSectors img="https://hellocircle.ca/assets/science.png" title="Science"></CSectors>
                        </Col>
                    </Row>
                
            </div>
        )
    }
}

export default CSectorSection;