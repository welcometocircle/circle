import React, { Component } from 'react';
import '../css/Main.css'

class Opportunities extends Component {
    render() {
        return (
            <div>
                <div className="opportunities-background">
                    <div className="opportunities">
                        <h2 className="opportunities-title">Joining the dream team.</h2>
                        <p className="opportunities-text">Current openings:</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="opportunities-link">
                                        <p className="opportunities-link-txt">Digital Design Lead</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="opportunities-link">
                                        <p className="opportunities-link-txt">Finance Lead</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="opportunities-link">
                                        <p className="opportunities-link-txt">Sponsorship Lead</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="opportunities-link">
                                        <p className="opportunities-link-txt">Event Lead</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        )
    }
}

export default Opportunities;
