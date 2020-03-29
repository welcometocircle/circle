import React, { Component } from 'react';
import gsap from 'gsap';


// function GradientLogo() {
//     return (
//         <div id="circlelogogradient_hype_container" class="HYPE_document" style="margin:auto;position:relative;width:100%;height:100%;overflow:hidden;">
//         <script type="text/javascript" charset="utf-8" src="../animations/GradientLogo/Circle%20Logo%20Gradient.hyperesources/circlelogogradient_hype_generated_script.js?67181"></script>
//         </div>);
// }

// export default GradientLogo;

class GradientLogo extends Component {
    
    render() {
        return (
            <div className='container gradient-container'>
                <div className="d-flex justify-content-center">
                    <h4 className="welcome-title">Welcome to Circle</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <h1 className="ideas-title">Ideas Start Here</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <img src="../assets/gradientLogoOverUnder3Faster2x.png" className="img-responsive gradient-logo" />
                </div>
            </div>         
        )
    }
}

export default GradientLogo;