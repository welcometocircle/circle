import React, { Component } from 'react';

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

class CSectors extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.sectorStyle}>
                <img src={this.props.img}/>
                <h5 style={styles.titleStyle}>{this.props.title}</h5>
            </div>
        )
    }
}

export default CSectors;