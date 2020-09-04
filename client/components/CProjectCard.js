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
        textAlign: "left"
      },
      btnMore: {
        background: "none",
        border: "none",
        // backgroundColor: "#C9C9C9",
        // borderRadius: 50,
        // textAlign: 'right'
      },
      btnImgMore: {
        width: "100%",
        height: "100%",
      },
      cardBody: {
        display: this.state.open ? "inline" : "none",
        // textAlign: "left",
      },
      eleg:{

      },
      elegTitle:{
        color: "white",
        letterSpacing: "0em"
      },
      elegText:{
        marginBottom: -1
      },
      sectorImg: {
        height: 90,
        width: 90,
        padding:10
      },
      btnHire: {
        background: "linear-gradient(90.65deg, #3C9FFA -25.2%, #DB00FF 189.89%), #FFFFFF",
        borderRadius: 10,
        border: 'none',
        // marginLeft: -10,
        // marginRight: -10
      },
      btnDisabled:{
        background: "#C4C4C4",
        borderRadius: 10,
        border: 'none'
      }
    };

    var sectorSrcList = []
    var sectorList = this.props.sectorList
    for (var i=0;i<sectorList.length;i++) {
      var sec = sectorList[i]
      if (sec =='Biz'){
        sectorSrcList.push({k:i,src:"../assets/filler.png"})
      }
      if (sec == "Tech") {
        sectorSrcList.push({ k: i, src: "../assets/filler.png" });
      }
      if (sec == "SSci") {
        sectorSrcList.push({ k: i, src: "../assets/filler.png" });
      }
      if (sec == "Sci") {
        sectorSrcList.push({ k: i, src: "../assets/filler.png" });
      }
    }
    const textAlign = "text-xs-center text-sm-center text-lg-left"
    const justifyContent = "justify-content-center  justify-content-lg-start"
    // const justifyContent = "justify-content-lg-center justify-content-sm-center justify-content-xs-center"
 

    let btnApplications;

    if (this.props.currHiring) {
      console.log(justifyContent)
      btnApplications = 
          <Row className="justify-content-center" style={{marginTop: 30 }}>

          <a
            href={this.props.hireLink}
            style={styles.btnHire}
            target="_blank"
          >
            <p style={{ marginTop: 10, color: "white" }}>
              Submit Application here!
            </p>
          </a>
          </Row>

    } else {
      btnApplications =
          <Row className="justify-content-center" style={{marginTop: 30 }}>
          <a
            disabled={true}
            style={styles.btnDisabled}
          >
            <p style={{ marginTop: 10, color: "#131416" }}>
              Applications Closed
            </p>
          </a>
          </Row>
    }

    const cardKey = "card" + this.props.cardKey;
    return (
      <div style={this.props.style} ref={this.myRef}>
        <Col xs={12} sm={12} lg={this.state.open ? 12 : 6}>
          <Card style={styles.card}>
            <Card.Img
              src={this.props.headImg}
              style={styles.headImg}
              onClick={this.handleClick}
            />
            <Card.Title>
              <Row className="justify-content-start align-items-center">
                <Col xs={9} sm={9} lg={10}>
                  <h5 style={styles.title}>{this.props.title}</h5>
                </Col>
                <Col xs={3} sm={3} lg={2}>
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
                </Col>
              </Row>
            </Card.Title>
            {/* <div style={styles.cardBody}> */}
            {/* <Card.Body className={textAlign}> */}
            <Row style={styles.cardBody}>
              <Col lg={8}>
                <Row>
                  <p className={textAlign}>{this.props.desc}</p>
                </Row>
                {/* <Row> */}
                <h6 className={textAlign + " col"}>SECTORS</h6>
                {/* </Row> */}
                <Row className={'justify-content-around justify-content-lg-start'}>
                  {sectorSrcList.map((sec) => (
                    <Col xs={6} sm={2} >
                      <img src={sec.src} key={sec.k} style={styles.sectorImg} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} sm={12} lg={4}>
                <Row className={justifyContent}>
                  <h6 style={{}}>ELIGIBILITY</h6>
                </Row>
                {this.props.elegList.map((eleg) => (
                  <Row className={justifyContent}>
                    <p style={styles.elegText}>{eleg}</p>
                  </Row>
                ))}
                {btnApplications}
              </Col>
            </Row>
            {/* </Card.Body> */}
            {/* </div> */}
          </Card>
        </Col>
      </div>
    );
  }
}

export default CProjectCard;
