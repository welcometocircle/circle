import React, { Component } from "react";



class COppTeam extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		const styles = {
      sBg: {
        // backgroundColor: "black",
        // borderRadius: 25,
        // height: "30vh",
        width: "70vw",
        textAlign: "center",
        borderRadius: 30,
        marginTop: "5vh",
        backgroundImage: "url(" + this.props.img + ")",
        backgroundSize: "100% 100%",
				display: "inline-block",
				paddingBottom:"5vh"
      },
      sTeam: {
        color: "white",
        textAlign: "left",
        paddingLeft: "7%",
        paddingTop: "5%",
      },
      sButton: {
        backgroundColor: "white",
        color: "black",
        borderRadius: 50,
        fontSize: "2vh",
        textAlign: "left",
				padding:"10px",
				fontWeight: 500,
				letterSpacing: '0.1em',
				marginLeft: "7%",
				marginTop: "10px"

				// marginBottom:"5%"
      },
    };

    return (
      <div style={this.props.style}>
        <div style={styles.sBg} src={this.props.img}>
          {/* <img style={} src={this.props.img} /> */}
          {/* <h6 style={titleStyle}>{this.props.title}</h6>
					<p style={descStyle}>{this.props.desc}</p> */}
          <h4 style={styles.sTeam}>{this.props.team}</h4>
					<div style={{paddingBottom:"30px"}}>
						{this.props.btnList.map(btn => (
							<button style={styles.sButton} key={btn.title} href={btn.link} className="pull-left">
								{btn.title}
							</button>
						))}
					</div>
						

        </div>
      </div>
    );
  }
}

export default COppTeam;
