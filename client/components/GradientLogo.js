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
    constructor(props){
        super(props);
        // this.myElement = null;
        // this.tl = null;
    }

    componentDidMount(){
        // this.myTween = TweenLite.to(this.myElement,1,{x:100,y:100});var colors = { top: "#8fd3f4", bottom: "#84fab0" };
        // var colors1 = { top: "#80002d", bottom: "#510885" };
        // var colors2 = { top: "#9b08bf", bottom: "#16dbdb" };

        // var rot = 0;
        // var rotamt = 360;

        // var tl = gsap.timeline({repeat:-1,ease: "none" })


        // function gradientFromTo(tl,col1,col2) {
        //     tl.fromTo('.gradientBack', { backgroundImage: "-webkit-linear-gradient(top," + col1.top + " , " + col1.bottom + " )", background: "linear-gradient(to top," + col1.top + " , " + col1.bottom + " )", rotation: rot, ease: "none" }, { duration: 5, backgroundImage: "-webkit-linear-gradient(top," + col2.top + " , " + col2.bottom + " )", background: "linear-gradient(to top," + col2.top + " , " + col2.bottom + " )", rotation: rot + rotamt, ease: "none" });
        //     rot += rotamt;
        // }

        // gradientFromTo(tl,colors1,colors2);
        // gradientFromTo(tl,colors2, colors1);


    }
    
    render() {
        return (
            
            // <div className='container-sm'>
                <div className='gradient-container'>
                 {/* <div> */}
                    {/* <div className="gradient-back"></div> */}
                {/* <img src='../assets/gradient250.gif' className='gradient-gif'/> */}
                {/* <div className='gradient-gif-backgroundimg'></div> */}
                {/* <img src="../assets/blackcircle.png" class="logo-top" /> */}
                <img src="../assets/gradientLogoNew.png" className="gradient-logo img-responsive center-block"/>
                {/* <video controls="controls" poster="circle.png" preload="none" src="../assets/gradientLogo.mov" width="100%" controlsList="nofullscreen nodownload noremote foobar"></video> */}
                {/* </div>   */}
            </div>         
        )
    }
}

export default GradientLogo;