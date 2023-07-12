import "../../assets/css/Basic/Navbar.css";

function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({behavior: "smooth"});
}

function Navbar() {
    return (
        <div id="navbar">
            <div id="button-container">
                <button onClick={() => {scrollToSection("section1")}}>Button1</button>
                <button onClick={() => {scrollToSection("section2")}}>Button2</button>
                <button onClick={() => {scrollToSection("section3")}}>Button3</button>
                <button onClick={() => {scrollToSection("section4")}}>Button4</button>
                <button onClick={() => {scrollToSection("section5")}}>Button5</button>
            </div>
        </div>
    )
}


export default Navbar;