import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class TemplatePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    const styles ={
      
    }
    return (
      <div style={this.props.style}>
        <Container>
          <Row className="justify-content-center">

          </Row>
        </Container>
      </div>
    )
  }
}

export default TemplatePage;
