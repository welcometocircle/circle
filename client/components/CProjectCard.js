import React, { Component, useState } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";

class CProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, scrollTo:false};
    this.myRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    // var moveTo = this.myRef.current.offsetTop + this.myRef.current.offsetHeight;
    // console.log(this.myRef.current.offsetTop + this.myRef.current.offsetHeigh);
    // if (this.state.scrollTo){
    //   console.log(this.myRef.current.offsetTop);
    //   window.scrollTo(0, this.myRef.current.offsetTop);
    //   this.setState({open: this.state.open, scrollTo: false});
    // } 
  }

  componentWillUnmount() {}

  handleClick(){
      this.myRef.current.scrollIntoView({behavior:'smooth'});
      this.setState({ open: !this.state.open, scrollTo:true });
  };

  render() {
    const styles = {
      card: {
        backgroundColor: "#1F2022",
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 40,
        overflow: "hidden",
        transition: "1s ease",
      },
      headImg: {
        borderRadius: 30,
      },
      header: {},
      title: {
        textAlign: "left",
      },
      btnMore: {
        background: "none",
        border: "none",
        // backgroundColor: "#C9C9C9",
        // borderRadius: 50,
        // textAlign: 'right'
      },
      btnImgMore: {
        width: "50%",
        height: "50%",
      },
    };
    const cardKey = "card" + this.props.cardKey;
    return (
      <div style={this.props.style} ref={this.myRef}>
        <Col sm={this.state.open ? 12 : 6}>
          <Card style={styles.card}>
            <Card.Img src={this.props.headImg} style={styles.headImg} />
            <Card.Title>
              <Row>
                <h5 style={styles.title}>{this.props.title}</h5>
                <button
                  style={styles.btnMore}
                  data-target={"#" + cardKey}
                  data-toggle="collapse"
                  // aria-expanded="false"
                  aria-expanded={this.state.open}
                  aria-controls={cardKey}
                  type="button"
                  role="button"
                  onClick={this.handleClick}
                >
                  {/* <h5>+</h5> */}
                  <img
                    style={styles.btnImgMore}
                    src="../assets/openCardsMore.png"
                    className="float-right collapsed"
                  />
                </button>
              </Row>
            </Card.Title>
            {/* <div id={cardKey} aria-labelledby={cardKey} className="collapse"> */}
            {/* <Collapse in={this.state.open}> */}
            <div style={{ display: this.state.open ? "inline" : "none" }}>
              <Card.Body>
                <p>{this.props.desc}</p>
              </Card.Body>
            </div>
            {/* </Collapse> */}
            {/* </div> */}
          </Card>
        </Col>
      </div>
    );
  }
}

export default CProjectCard;
