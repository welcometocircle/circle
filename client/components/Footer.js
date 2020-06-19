import React, {
    Component,
} from 'react';
// import '../css/compass.css';
import '../css/Main.css'



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        };
    }
    render() {
        return (
            <div className="footer ">
                <div className="container footer-wrapper">
                    <div className="row">
                        <div className="col-lg-3">
                        <div className="title-wrap">
                            <h3 className="footer-title">circle</h3>
                        </div>
                        </div>
                        <div className="col-lg-5">
                        </div>
                        <div className="col-lg-1 col-3">
                        <a className="footer-social" target="_blank" href="https://www.instagram.com/welcometocircle/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        </div>
                        <div className="col-lg-1 col-3">
                        <a className="footer-social" target="_blank" href="https://www.facebook.com/welcometocircle/">
                            <i className="fa fa-facebook"></i>
                        </a>
                        </div>
                        <div className="col-lg-1 col-3">
                        <a className="footer-social" target="_blank" href="https://www.linkedin.com/company/connectwithcircle/about/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
