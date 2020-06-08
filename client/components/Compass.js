import React, { Component, createRef, useEffect } from 'react';
import '../css/compass.css';
import Lottie from "react-lottie";
import * as aniCompassData from "../assets/compass-rotating-logo/compass-logo-layered.json"



class Compass extends Component {
    constructor(props){
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        analytics.logEvent("Compass Did Mount")
    }

    render() {

        const aniCompass  = {
                animationData: aniCompassData.default,
                loop: true,
                autoplay: true,
                assetsPath: "../assets/compass-rotating-logo/images/",
                rendererSettings:{
                    preserveAspectRatio: 'xMidYMid slice'
                }
        };
        return (
            <div>
                <div className="compass-background">
                    <div className="compass container">
                        <div className="row justify-content-center">
                            <Lottie isClickToPauseDisabled options={aniCompass} height={200} width={200}/>
                        </div>
                        <h2 className="compass-title">compass</h2>
                        <h3 className="compass-subtitle">a virtual hackathon like no other</h3>
                    </div>
                    <div className="compass-shape-div">
                        <p className="compass-desc">coming soon</p>
                        <div className="row justify-content-center compass-shape"> 
                            <img src="assets/compass-shape.png" className=""/>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default Compass;
