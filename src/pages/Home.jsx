import Aboutus from "../components/Aboutus";
import Choose from "../components/Choose";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <hr />
      <Aboutus />
      <hr />
      <Services />
      <hr />
      <Choose />
      <hr />
      <Contact />
    </div>
  );
};

export default Home;
