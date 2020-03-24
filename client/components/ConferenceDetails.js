import React, { Component } from 'react';

class ConferenceDetails extends Component {
    render() {
        return (
            <div className="conf2-background">
                <h2 className="conf2-title">Just about everything.</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-3">
                            <p class="conf2-text">Circle Conference aims to go beyond and provide students with greater access to opportunities and networks within their sectors – and of course much more than just that.</p>
                        </div>
                        <div className="col-lg-5">
                            <div className="conf2-area">
                                <div className="list"><p className="list-text">Multidisciplinary</p></div>
                                <div className="list"><p className="list-text">Opportunities within sectors</p></div>
                                <div className="list"><p className="list-text">Networking</p></div>
                                <div className="list"><p className="list-text">Building your idea</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConferenceDetails;