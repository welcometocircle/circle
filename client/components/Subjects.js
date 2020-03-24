import React, { Component } from 'react';
import SubjectArea from './SubjectArea'

class Subjects extends Component {
    render() {
        return (
            <div className="subjects-background">
                <div className="subjects">
                    <h2 className="subject-main-title">All 4 One.</h2>
                    <p className="gen-text">Designed with core sectors in mind, Circle intergrates science, technology, business, and social science to bring solutions to the issues we face today.</p>
                </div>
                <div className="subject-region">
                    <div className="row justify-content-center">
                        <div className="col-lg-1 col-2 col-sm-2 col-md-2"></div>
                        <div className="col-lg-10 col-10 col-sm-10 col-md-10">
                            <div className="row">
                                <div className="col-lg-3 col-5 col-sm-5 col-md-5">
                                    <SubjectArea img="../assets/science.png" title="Science" />
                                </div>
                                <div className="col-lg-3 col-5 col-sm-5 col-md-5">
                                    <SubjectArea img="../assets/tech.png" title="Tech" />
                                </div>
                                <div className="col-lg-3 col-5 col-sm-5 col-md-5">
                                    <SubjectArea img="../assets/business.png" title="Business" />
                                </div>
                                <div className="col-lg-3 col-5 col-sm-5 col-md-5">
                                    <SubjectArea img="../assets/socialsci.png" title="Social Science" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-1 col-sm-1 col-md-1"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Subjects;