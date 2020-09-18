import React, { Component, useState } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import CSectorAnimation from "./global/CSectorAnimation";

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
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 40,
        overflow: "hidden",
        transition: "1s ease",
        height: this.state.open ? "unset" : 300,
        backgroundImage: this.state.open
          ? "none"
          : "url(" + this.props.headImg + ")",
        backgroundRepeat: "no-repeat",
        // width: '500',
        backgroundSize: "cover",
      },
      headImg: {
        borderRadius: 30,
      },
      header: {},
      title: {
        textAlign: "left",
      },
      titleRow: {
        marginTop: this.state.open ? "unset" : 200,
        paddingRight: this.state.open? '0%':"5%",
      },
      btnMore: {
        background: "none",
        border: "none",
        backgroundColor: "#C9C9C9",
        borderRadius: "50%",
        // textAlign: 'right'
        height: "45px",
        width: "45px",
        alignItems: "center",
        textAlign: "center",
        marginTop: "-3px"
      },
      btnTxtMore: {
        // paddingRight: "100px",
        // marginRight: "100px",
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'black',
        border:'none',
        display:'block',
        lineHeight:0,
        marginTop:1

      },
      btnImgMore: {
        width: "100%",
        height: "100%",
      },
      cardBody: {
        display: this.state.open ? "inline" : "none",
        // textAlign: "left",
      },
      eleg: {},
      elegTitle: {
        color: "white",
        letterSpacing: "0em",
      },
      elegText: {
        marginBottom: -1,
      },
      sectorImg: {
        height: 90,
        width: 90,
        padding: 10,
      },
      btnHire: {
        background:
          "linear-gradient(90.65deg, #3C9FFA -25.2%, #DB00FF 189.89%), #FFFFFF",
        borderRadius: 10,
        border: "none",
        // marginLeft: -10,
        // marginRight: -10
      },
      btnDisabled: {
        background: "#C4C4C4",
        borderRadius: 10,
        border: "none",
      },
    };

    var sectorSrcList = []
    var sectorList = this.props.sectorList

    for (var i = 0; i < sectorList.length; i++) {
      var sec = sectorList[i];
      if (sec == "Biz") {
        sectorSrcList.push({ k: i, s:'Biz' });
      }
      if (sec == "Tech") {
        sectorSrcList.push({ k: i, s: "Tech" });
      }
      if (sec == "SSci") {
        sectorSrcList.push({ k: i, s: "SSci" });
      }
      if (sec == "Sci") {
        sectorSrcList.push({ k: i, s: "Sci" });
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
    var headerImg;
    if (this.state.open) {
      headerImg = 
      <Card.Img
        src={this.props.headImg}
        style={styles.headImg}
        onClick={this.handleClick}
      />
    }else{
      headerImg=null;
    }

    const cardKey = "card" + this.props.cardKey;
    return (
      <div style={this.props.style} ref={this.myRef} onClick={this.state.open? '':this.handleClick}>
        <Col xs={12} sm={12} lg={this.state.open ? 12 : 6}>
          <Card style={styles.card}>
            {headerImg}
            <Card.Title>
              <Row
                className="justify-content-start align-items-center"
                style={styles.titleRow}
              >
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
                    {/* <img
                      style={styles.btnImgMore}
                      src="../assets/openCardsMore.png"
                      className="float-right collapsed"
                    /> */}
                    <h5 style={styles.btnTxtMore}>{this.state.open? "x":'+'}</h5>
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
                <Row
                  className={"justify-content-xs-center justify-content-around justify-content-lg-start"}
                >
                  {sectorSrcList.map((sec) => (
                    <Col xs={6} sm={2}>
                      <CSectorAnimation
                        sector={sec.s}
                        key={sec.k}
                        height={50}
                        width={50}
                        style={{ padding: 10 }}
                      />
                      {/* <img src={sec.src} key={sec.k} style={styles.sectorImg} /> */}
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
