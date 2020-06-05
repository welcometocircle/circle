import React, { Component } from 'react';
import '../css/compass.css';



class Compass extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        analytics.logEvent("Compass Did Mount")
    }

    render() {
        return (
            <div>
                <div className="compass-background">
                    <div className="compass container">
                        <div className="row justify-content-center">
                            <img src="assets/compass-logo.png" className="compass-logo col-lg-2 col-6"/>
                        </div>
                        <h2 className="compass-title">compass</h2>
                        <h3 className="compass-subtitle">a virtual hackathon like no other</h3>
                        <p className="compass-desc">coming soon</p>
                        
                    </div>

                </div>

            </div>

        )
    }
}

export default Compass;