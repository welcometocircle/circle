import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const styles = {
    sectorStyle: {
        backgroundColor: '#1F2022',
        borderRadius: 25,
        height: 300,
        width: 300,
    },
    title: {
        color: "#161616",
        marginTop: 50,
    },
    joinText: {
        color: "#4B4B4B",
        marginTop: 20,
        textAlign: 'center'
    }
}

class CToronto extends Component {
    constructor(props) {
        super(props)
        this.state = { width: window.innerWidth };
    }

    render() {

        var torontoHeight;

        if (this.state.width < 576) {
            console.log("576")
            torontoHeight = '25vh';
        } else if (this.state.width < 1000) {
            torontoHeight = '25vh';
        } else if (this.state.width < 1100) {
            torontoHeight = '25vh';
        } else {
            torontoHeight = '75vh';
        }

        return (
            <div style={{ backgroundColor: 'white', marginTop: 50 }}>
                <Container>
                    <Row className="justify-content-center">
                        <h3 style={styles.title}>Made in the <img src="../assets/heart.png" />{" "} of Toronto.</h3>
                        <img src="../assets/toronto.png" style={{ height: torontoHeight}}/>
                        <Col lg="8" style={{ marginTop: 20 }}>
                            <hr style={{ borderColor: '#8B8B8B' }} />
                        </Col>
                    </Row>
                    <h3 style={styles.title}>Join Circle.</h3>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <p style={styles.joinText}>We are always expanding our team. If there is an available role you are interested in, apply by visiting our opportunities page.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg="6" style={{ marginTop: 20, marginBottom: 100 }}>
                            {/* <a href="" className="openButton" style={{color: '#1B1B1B'}}>EXPLORE OPEN CIRCLE</a> */}
                            <p style={{ textAlign: 'center' }}>
                                <a href="/opportunities" className="joinButton">Opportunities</a>
                            </p>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default CToronto;