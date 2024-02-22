import "./LandingPage.css";
import Home from "./Components/Home";
import CourseAbout from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function LandingPage() {
  return (
    <div className="App">
      <Home />
      <CourseAbout />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
