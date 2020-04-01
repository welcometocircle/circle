import React, { Component } from 'react';
import '../css/Main.css'

class Opportunities extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

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
                                    <a href="https://joincircle.typeform.com/to/KBNU1K" target="_blank" className="opportunities-anchor">
                                        <p className="opportunities-link opportunities-link-txt">Digital Design Lead</p>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="https://joincircle.typeform.com/to/KBNU1K" target="_blank" className="opportunities-anchor">
                                        <p className="opportunities-link opportunities-link-txt">Finance Lead</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="https://joincircle.typeform.com/to/KBNU1K" target="_blank" className="opportunities-anchor">
                                        <p className="opportunities-link opportunities-link-txt">Sponsorship Lead</p>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="https://joincircle.typeform.com/to/KBNU1K" target="_blank" className="opportunities-anchor">
                                        <p className="opportunities-link opportunities-link-txt">Event Lead</p>
                                    </a>
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
