import "./LandingPage.css";
import Home from "./Components/Home";
import CourseAbout from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home2 from "./Components/Home2";
import CourseAbout2 from "./Components/About2";

function LandingPage() {
  return (
    <div className="App">
      <Home />
      <CourseAbout />
      <Home2 />
      <CourseAbout2 />

      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
