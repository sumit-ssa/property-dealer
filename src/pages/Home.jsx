import Aboutus from "../components/Aboutus";
import Choose from "../components/Choose";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <ServiceSection/>
      {/* <Services /> */}
      <Choose />
      <Contact />
    </>
  );
};

export default Home;
