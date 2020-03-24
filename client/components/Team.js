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
                <div className="team-join">
                    <p className="team-txt">Join the team</p>
                </div>
            </div>
        )
    }
}

export default Team;
