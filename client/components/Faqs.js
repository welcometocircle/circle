import React, { Component } from 'react';
import '../css/Main.css'

class Faqs extends Component {
    render() {
        return (
            <div className="faqs-background">
                <div className="faqs">
                    <h2 className="faqs-title">FAQs</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="faq">
                                    <h3 className="faqs-question">What is Circle?</h3>
                                    <p className="faqs-answer">We aim to create a fagship event in which students from science, technology, business, and social science will be put into teams and tackle a given global challenge using their skills.</p>
                                    <p className="faqs-answer">Circle itself is the company that will create this event along with many other endeavors to promote opportunities and innovation within these sectors.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq">
                                    <h3 className="faqs-question">How is Circle different from other conference companies?</h3>
                                    <p className="faqs-answer">We believe that solving the problems we face today requires a combined approach of many different sectors therefore we are focused on creating a multi-disciplinary event rather than just focusing on one particular skill.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq">
                                    <h3 className="faqs-question">How can I get involved?</h3>
                                    <p className="faqs-answer">At Circle, we recruit on a rolling basis. We are constantly posting opportunities on this page, so keep a look out on that to see if an executive role fits your goals.</p>
                                    <p className="faqs-answer">Stay up to date via our social media pages as well as this website to learn more about how to participate in the Circle Conference.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faqs;
