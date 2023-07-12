import Navbar from "./components/Basic/Navbar";
import Footer from "./components/Basic/Footer";
import BackToTop from "./components/Basic/BackToTop";

import Spacer from "./components/Basic/Spacer";
import LargeSpacer from "./components/Basic/LargeSpacer";

import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
import Section5 from "./components/Sections/Section5";


function App() {
  return (
    <div id="app">
      {/* here are some sections, more can be made or others can be removed, if necessary */}

      <Section1></Section1>

      <Section2></Section2>

      <Section3></Section3>

      <Section4></Section4>

      <Section5></Section5>

      {/* back to top button */}
      <BackToTop/>

      {/* navigation bar to be drawn on top of everything else */}
      <Navbar/>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
