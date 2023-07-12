import "../../assets/css/Sections/Section2.css";

import Spacer from "../Basic/Spacer";

function Section2() {
    return (
        <div id="section2">
            {/* spacer */}
            <Spacer></Spacer>

            {/* header */}
            <h1 class="section-header">Section 2</h1>


            {/* list of reasons to show why product is good */}
            <div id="item-container">
                {/* reason 1 */}
                <div>
                    <h3>Fast and powerful</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ipsum earum illum dolores repellendus neque 
                        magni quam eius, maiores cum voluptatum doloremque repudiandae 
                        exercitationem quisquam consequuntur optio totam dicta blanditiis 
                        necessitatibus molestias esse eum quaerat expedita quo. Sint 
                        voluptatem dolorem consequatur aliquam. Omnis quibusdam
                        ipsa nesciunt asperiores quos repudiandae in.
                    </p>
                </div>

                {/* reason 2 */}
                <div>
                    <h3>i hate fortnite</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ipsum earum illum dolores repellendus neque 
                        magni quam eius, maiores cum voluptatum doloremque repudiandae 
                        exercitationem quisquam consequuntur optio totam dicta blanditiis 
                        necessitatibus molestias esse eum quaerat expedita quo. Sint 
                        voluptatem dolorem consequatur aliquam. Omnis quibusdam
                        ipsa nesciunt asperiores quos repudiandae in.
                    </p>
                </div>

                {/* reason 3 */}
                <div class="card-text" style="padding-top: 0;">
                    <h3>maximum productivity</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ipsum earum illum dolores repellendus neque 
                        magni quam eius, maiores cum voluptatum doloremque repudiandae 
                        exercitationem quisquam consequuntur optio totam dicta blanditiis 
                        necessitatibus molestias esse eum quaerat expedita quo. Sint 
                        voluptatem dolorem consequatur aliquam. Omnis quibusdam
                        ipsa nesciunt asperiores quos repudiandae in.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section2;