import "../../assets/css/Basic/BackToTop.css";

// indicator to show whether the user has already moved to/from the top of the page
var atTop = true; // this exists to recognize when to play fade in/out animation and to avoid loop

/* if scroll event is called, execute lambda function to hide BackToTop button if at top of page */
window.addEventListener("scroll", () => {
    // if scroll is less than 300 and atTop is false, play hidigng animation and hide the button
    if(window.scrollY <= 300 && !atTop) {
        // play fade out animation for 0.3 seconds
        document.getElementById("back-to-top").style.animation = "back-to-top-fade-out 0.3s";

        // hide the button after 0.3 seconds
        setTimeout(() => {
            document.getElementById("back-to-top").style.visibility = "hidden";
        }, 300);

        // set atTop indicator to true
        atTop = true;
    }
    // if scroll is greater than 300 and atTop is true, play showing animation and show the button
    else if(window.scrollY > 300 && atTop) {
        // set button to visible
        document.getElementById("back-to-top").style.visibility = "visible";

        // play fade in animation for 0.3 seconds
        document.getElementById("back-to-top").style.animation = "back-to-top-fade-in 0.3s";

        // set atTop indicator to false
        atTop = false;
    }
});

export default function BackToTop() {
    return (
        <button id="back-to-top" title="Back To Top" style="visibility: hidden;" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
            <img src="src/assets/images/up_arrow.svg"/>
        </button>
    )
}