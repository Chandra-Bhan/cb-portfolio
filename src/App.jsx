import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div id="root" style={{ width: "100%" }} className="container">
        <Navbar />
        <div className="main_content">
          <Home />
          <hr className="hr_line" />
          <Features />
          <hr className="hr_line" />
          <Projects />
          <hr className="hr_line" />
          <Resume />
          <hr className="hr_line" />
          <Footer />
          <hr className="hr_line" />
        </div>
      </div>
    </>
  );
}

export default App;
