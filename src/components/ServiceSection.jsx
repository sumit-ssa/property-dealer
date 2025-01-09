import { ServicesData } from "../utils/Data";
import SliderSection from "./section/SliderSection";
import { animated, useSpring } from "react-spring";

const ServiceSection = () => {
  const fadeUp = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 280, friction: 20 },
  });

  return (
    <div className="py-24 bg-gradient-to-b from-blue-50 to-white" id="services">
      <animated.div style={fadeUp} className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Our Services
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-5xl mx-auto">
          Comprehensive solutions for all your insurance and real estate needs.
          Explore our wide range of services designed to protect your assets and
          help you find your dream property.
        </p>
        {ServicesData?.map((d, i) => {
          return <SliderSection key={i} data={d} layout={i % 2 === 0} />;
        })}
      </animated.div>
    </div>
  );
};

export default ServiceSection;
