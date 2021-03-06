import React, { Component } from 'react';
import CSectorAnimation from './global/CSectorAnimation.js'
import CSectorSection from './CSectorSection.js';

const styles = {
  sector: {
    backgroundColor: "#1F2022",
    borderRadius: 25,
    height: 250,
    width: 250,
    marginBottom: 30,
    padding: 20,
  },
  title: {
    // marginLeft: 20,
    background: "linear-gradient(45deg, #939393, #6C6C6C)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 600,
    position: "absolute",
    bottom: 0,
    textAlign: "left",
    marginBottom: 45,
    paddingLeft: 0,
    paddingRight:10
  },
};

class CSectors extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.sector}>
                {/* <img src={this.props.img} /> */}
                <CSectorAnimation height="50" sector={this.props.sector} styleAnimation={this.props.styleAnimation} height={this.props.height}/>
                <span style={styles.spans}>
                    <h3 style={styles.title}>{this.props.title}</h3>
                </span>
            </div>
        )
    }
}

export default CSectors;