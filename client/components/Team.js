import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div className="team-section">
                <div class="team">
                    <h2 className="team-title">By a team like no other.</h2>
                </div>
                <div className="team-pic-wrapper">
                    <img className="team-pic" src="../assets/team.png" />
                </div>
                <div className="d-flex justify-content-center">
                    <a href="#/opportunities" class='link-button link-text'>Join the team</a>
                </div>
            </div>
        )
    }
}

export default Team;
