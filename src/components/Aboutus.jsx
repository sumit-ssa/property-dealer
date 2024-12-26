import { useSpring, animated } from "react-spring";

import image from "../assets/hero-image.jpg";

const Aboutus = () => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <animated.div
          style={props}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={image} alt="About Us" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              We are a leading provider of comprehensive insurance and real
              estate solutions. With years of experience and a commitment to
              excellence, we strive to secure your future and help you make
              informed decisions about your investments.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts is dedicated to offering personalized services
              tailored to your unique needs, whether you&#39;re looking for
              insurance coverage, property investments, or financial advice.
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Aboutus;
