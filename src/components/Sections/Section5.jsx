import "../../assets/css/Sections/Section3.css";

import Spacer from "../Basic/Spacer";

function Section3() {
    return (
        <div id="section3">
            <div id="background"></div>

            {/* spacer */}
            <Spacer></Spacer>

            {/* header */}
            <h1 class="section-header">Quote about lorem ipsum</h1>

            {/* spacer */}
            <Spacer></Spacer>

            <h3>
                <em>"A long nice lorem ipsum quote goes here"</em>
            </h3>
            <h4>
                - Aqmer
            </h4>
        </div>
    )
}

export default Section3;