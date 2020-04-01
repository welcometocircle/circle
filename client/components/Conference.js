import React, { Component } from 'react';

class Conference extends Component {
    render() {
        return (
            <div className="conf-background">
                <div className="conference">
                    <div className="conf-date-wrap justify-content-center">
                        <div className="conf-date">
                            <p className="conf-date-text">Fall 2020</p>
                        </div>
                    </div>
                    <h2 className="conference-title">Circle Conference</h2>
                    <p className="conf-text">The flagship event. <br/> This ideation conference will allow students from the 4 sectors to come together and solve a given challenge using their array of skills. After applying, students will be randomly placed into teams comprising of all sectors that will work together to create the solutions of tomorrow.</p>


                </div>
                <div className="conf-process">
                    <div className="register process-item">
                        <img className="process-img" src="../assets/register.png"></img>
                        <p className="process-text">Register</p>
                    </div>
                    <div className="line"></div>
                    <div className="register process-item">
                        <img className="process-img" src="../assets/teams.png"></img>
                        <p className="process-text">Form Teams</p>
                    </div>
                    <div className="line"></div>
                    <div className="register process-item">
                        <img className="process-img" src="../assets/ideation.png"></img>
                        <p className="process-text">Ideation</p>
                    </div>
                    <div className="line"></div>
                    <div className="register process-item">
                        <img className="process-img" src="../assets/present.png"></img>
                        <p className="process-text">Present</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Conference;
