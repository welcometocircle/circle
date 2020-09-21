import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'

const styles = {
    sectorStyle: {
        backgroundColor: '#1F2022',
        borderRadius: 25,
        height: 300,
        width: 300,
    },
    title: {
        color: "#161616",
        marginTop: 75,
    },
    joinText: {
        color: "#4B4B4B",
        marginTop: 20,
        textAlign: 'center'
    },
    joinButton: {
        marginLeft: 'auto',
        marginRight: 'auto'
        
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
            torontoHeight = '15vh';
        } else {
            torontoHeight = '40vh';
        }

        return (
            <div style={{ backgroundColor: 'white'}}>
                <Container>
                    <Row className="justify-content-center" style={{ marginTop: 100}}>
                        <Row>
                        <h3 style={styles.title}>Made in the <FaHeart style={{color:'red'}}/> of Toronto.</h3>
                        </Row>
                        <Row>
                        <img src="../assets/toronto.png" style={{ height: torontoHeight, marginTop: 75}}/>
                        </Row>
                        <Col lg="8" style={{ marginTop: 75 }}>
                            <hr style={{ borderColor: '#8B8B8B' }} />
                        </Col>
                    </Row>
                    <h3 style={styles.title}>Join Circle.</h3>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <p style={styles.joinText}>We are always expanding our team. If there is an available role you are interested in, apply by visiting our opportunities page.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" >
                        <Col lg="6" style={{ marginTop: 20, marginBottom: 100}} className="d-flex">
                            <a href="/opportunities" style={styles.joinButton} className="btnDark"><p style={{color: 'white', textAlign: 'center'}}>Opportunities </p></a>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default CToronto;