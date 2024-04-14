import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary lg:px-40 sm:px-5">
        <Intro />
        <About />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
