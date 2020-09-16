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
            <div>
                <Container>
                    <div style={{ marginTop: 30 }}>

                        <div className="justify-content-center">
                            <p style={{ textAlign: 'center' }}>SECTOR</p>
                            <h2>All 4 One.</h2>
                            <Row className="justify-content-center">
                                <Col lg="8">
                                    <p style={{ textAlign: 'center' }}>Designed with core sectors in mind, Circle integrates science, technology, business, and social science to bring solutions to the issues we face today.</p>
                                </Col>
                            </Row>
                        </div>
                        <Row className="justify-content-center" style={{ marginTop: 30 }}>
                            <Col lg="6" md="6" sm="12">
                                <span className="pull-right">
                                    <CSectors title="Business" sector="Biz" styleAnimation={{ transform: 'scaleX(-1)', marginLeft: -120, }} height="60px"></CSectors>
                                </span>
                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <CSectors title="Technology" sector="Tech" styleAnimation={{ marginLeft: -120, }} height="60px"></CSectors>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="4" md="6" sm="12">
                                <span className="pull-right">
                                    <CSectors title="Social Science" sector="SSci" styleAnimation={{ marginLeft: -130, }} height="60px"></CSectors>
                                </span>
                            </Col>
                            <Col lg="4" md="6" sm="12">
                                <CSectors title="Science" sector="Sci" styleAnimation={{ marginLeft: -130, }} height="60px"></CSectors>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        )
    }
}

export default CSectorSection;