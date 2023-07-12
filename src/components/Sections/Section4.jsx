import "../../assets/css/Sections/Section4.css";


import Spacer from "../Basic/Spacer";
import Subheading from "../Basic/Subheading";


function Section4() {
    return (
        <div id="section4">
            {/* spacer */}
            <Spacer></Spacer>

            {/* very large header */}
            <p class="section-header">
                Section 4
            </p>

            {/* subheading */}
            <Subheading text="lorem ipsum some more text idk this is a subheading"></Subheading>
        
            {/* item container */}
            <div id="item-container">
                <img class="card-image" src="src/assets/images/placeholder1.png"/>

                <h4 class="card-text">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorem sapiente deleniti 
                    dignissimos voluptatum officiis totam harum 
                    aperiam inventore! Ea doloribus cum, autem, 
                    repellendus delectus veritatis tempora 
                    excepturi quis similique cumque earum 
                    labore a magni cupiditate nobis. Excepturi, 
                    quos cumque ab libero ducimus necessitatibus 
                    odio magni voluptate quasi accusamus minus 
                    sequi, pariatur error voluptates cum omnis.
                </h4>
            </div>
        </div>
    )
}

export default Section4;