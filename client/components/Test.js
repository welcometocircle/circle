import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';


const styles = {
    sectorStyle: {
        backgroundColor: '#1F2022',
        borderRadius: 25,
        height: 240,
    },
    titleStyle: {
        marginTop: 80,
        marginLeft: 20,
        fontWeight: 300,
        textAlign: 'left',
    } 
}

class PTest extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
							<div>
								<section id="section-1">section 1</section>
								<section id="section-2">section 2</section>
								<section id="section-3">section 3</section>
							</div>

							<Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName=".test">
								<li><a href="#section-1">section 1</a></li>
								<li><a href="#section-2">section 2</a></li>
								<li><a href="#section-3">section 3</a></li>
							</Scrollspy>

						</div>
        )
    }
}

export default PTest;