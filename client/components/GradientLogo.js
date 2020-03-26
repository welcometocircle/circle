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
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6 gradient-logo">
                        <img src="../assets/gradientLogoOverUnder2.png" className="img-responsive" />
                    </div>
                    <div class="col-md-4">
                        <h4 className="welcome-title">Welcome to Circle</h4>
                        <h1 className="ideas-title">Ideas start here.</h1>
                    </div>
                    
                </div>
                

            </div>         
        )
    }
}

export default GradientLogo;