import React, { Component } from "react";
import {Link} from 'react-router-dom';


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
        // textAlign: "center",
        borderRadius: 20,
        marginTop: "5vh",
        backgroundImage: "url(" + this.props.img + ")",
        backgroundSize: "100% 100%",
				display: "inline-block",
				// paddingBottom:"5vh"
				// marginLeft:20px
				// margin
      },
      sTeam: {
        color: "white",
        textAlign: "left",
        paddingLeft: "10%",
        paddingTop: "5%",
      },
      sButton: {
        backgroundColor: "white",
        borderRadius: 50,
				borderStyle: 'hidden',

        color: "black",

        // fontSize: "2vw",
        textAlign: "left",
				// padding:"10px 20px",
				fontWeight: 500,
				letterSpacing: '0.1em',
				marginLeft: "10%",
				marginTop: "10px",
				paddingBottom: "0px",
				paddingTop: "13px",
				textDecoration: "none"
				// marginBottom:"10px"
      }
		};

    return (
      <div style={this.props.style}>
        <div style={styles.sBg} className="">
          <h4 style={styles.sTeam}>{this.props.team}</h4>
					<div style={{marginBottom:"40px"}}>
						{this.props.btnList.map(btn => (
							<div className="row">
								<a href={btn.link} style={styles.sButton} key={btn.title} target="_blank" className="pull-left" >
										<p style={{color: 'black'}}>{btn.title}</p>
								</a>
							</div>
						))}
					</div>

        </div>
      </div>
    );
  }
}

export default COppTeam;
