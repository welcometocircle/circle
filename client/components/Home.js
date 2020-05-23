import React, { Component } from 'react';
import '../css/App.css';
import '../css/Main.css';
import MyNavbar from './MyNavbar.js'
import GradientLogo from './GradientLogo.js'
import Subjects from './Subjects';
import Conference from './Conference';
import ConferenceDetails from './ConferenceDetails';
import Team from './Team';
import Inquiries from './Inquiries';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
    componentDidMount(){
        analytics.logEvent("Home Did Mount")
    }
    render(){
        return(
        <div>
            {/* <MyNavbar /> */}
            <GradientLogo/>
            <div className="innovation">
                <h2 className="innovation-title">Innovation is just the beginning</h2>
                <p className="gen-text">Circle is a new-age innovation company dedicated to bringing opportunities for students and empowering them to become the leaders of tomorrow. With an interdisicplinary focus, we aspire for students of multiple sectors to come together and create for the future.</p>
            </div>
            <Subjects />
            <Conference />
            <ConferenceDetails />
            <Team />
            <div className="toronto">
                <h2 className="toronto-title">Made in the <img className="heart" src="../assets/heart.png"></img> of Toronto</h2>
                <img className="toronto-pic" src="../assets/toronto.png" />
            </div>
            <Inquiries />
        </div >
        )
    }
        
}

export default Home;
