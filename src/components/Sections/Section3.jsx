import "../../assets/css/Sections/Section5.css";


import Spacer from "../Basic/Spacer";
import Subheading from "../Basic/Subheading";


function Section5() {
    return (
        <div id="section5">
            {/* spacer */}
            <Spacer></Spacer>

            {/* very large header */}
            <p class="section-header">
                Here is a 3D model of lorem ispum
            </p>

            {/* subheading */}
            <Subheading text="lorem ipsum some more text idk this is a subheading"></Subheading>
        
            {/* item container */}
            <div id="item-container">
                <div class="sketchfab-embed-wrapper" id="model"> <iframe title="(FREE) Lamborghini Wheel - SDC" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share  src="https://sketchfab.com/models/0102d9b0929242f6af72009ef465ff68/embed" width="900px" height="500px"> </iframe> </div>
            </div>
        </div>
    )
}

export default Section5;