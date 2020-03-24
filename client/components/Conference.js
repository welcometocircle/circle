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
                    <p className="conf-text">Circle is a new-age innovation company dedicated to bringing opportunities for students and empowering them to become the leaders of tomorrow. With an interdisicplinary focus, we aspire for students of multiple sectors to come together and create for the future.</p>

                    <div className="conf-process">
                        <div className="register process-item">
                            <img className="process-img" src="../assets/register.png"></img>
                            <p className="process-text">Register</p>
                        </div>
                        <div className="line"></div>
                        <div className="register process-item">
                            <img className="process-img" src="../assets/teams.png"></img>
                            <p className="process-text">Randomized Teams</p>
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
            </div>
        )
    }
}

export default Conference;
