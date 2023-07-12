import "../../assets/css/Sections/Section1.css";

import Spacer from "../Basic/Spacer";
import Subheading from "../Basic/Subheading";

function Section1() {
    return (
        <div id="section1">

            {/* header */}
           
            <div id="header-container">

                <div id="header">
                    
                    {/* Heading */}
                    <h1>Lorem</h1>
                    <h2>Ipsumususu</h2>

                    {/* Subheading */}
                    <p>Lorem Ipsum is simply dummy text.</p>
                 </div>

            <div id="main-img-container">
                {/* Main Image */}
                <img id= "main-img" class="card-img" src="src/assets/images/placeholder1.png" />
            </div>

            </div>
        </div>
    )
}

export default Section1;