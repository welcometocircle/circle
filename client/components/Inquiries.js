import React, { Component } from 'react';

class Inquiries extends Component {
    render() {
        return (
            <div className="inquiries">
                <h2 className="inquiries-title">Hey, Hi, Hello.</h2>
                <h3 className="inquiries-subtitle">Get in touch with us.</h3>
                <div className="inquiry-buttons" >
                    {/* <div type='button' className="inquiry-button" onClick="window.location='mailto:info@hellocircle.ca';" >
                        <p className="inquiry-text">General Inquiries</p>
                    </div>
                    <div className="inquiry-button">
                        <p className="inquiry-text">Sponsorship</p>
                    </div> */}
                    <a href="mailto:info@hellocircle.ca" class='link-button link-text'>General Inquiries</a>
                    <a href="mailto:sponsorship@hellocircle.ca" class='link-button link-text'>Sponsorship</a>
                </div>
            </div>
        )
    }
}

export default Inquiries;