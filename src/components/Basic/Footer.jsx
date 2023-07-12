import "../../assets/css/Basic/Footer.css";

function Footer() {
    return (
        <div id="footer">
            <p> &copy; company/product name</p>

          

            <p id="made-with-solid">
                <span>
                    {/* &#128150; is the code for a heart emoji */}
                    Made with &#128150; and <a href="https://www.solidjs.com" target="blank">SolidJS.</a>
                </span>

                <img src="src/assets/images/solid_logo.svg"/>
            </p>
        </div>
    )
}

export default Footer;