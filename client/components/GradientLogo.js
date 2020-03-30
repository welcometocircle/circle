import React, { Component } from 'react';

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
                    {/* <img src="../assets/blackcircle.png" id='tmpGradient' data-original-img="../assets/gradientLogoOverUnder3Faster2x.png" onLoad="loadImage()"/>
                    <script>
                        loadImage(){
                            $('#tmpGradient').attr('src', $('#tmpGradient').attr('data-original-img'))
                        } 
                    </script> */}
                </div>
            </div>         
        )
    }
}

export default GradientLogo;