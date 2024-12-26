/* eslint-disable react/prop-types */

import { useSpring, animated } from "react-spring";
import {
  FaCheckCircle,
  FaUserShield,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

const ReasonCard = ({ icon: Icon, title, description }) => {
  const props = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.8)" },
  });

  return (
    <animated.div
      style={props}
      className="flex flex-col items-center text-center"
    >
      <Icon className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </animated.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ReasonCard
            icon={FaCheckCircle}
            title="Expertise"
            description="Years of experience in insurance and real estate."
          />
          <ReasonCard
            icon={FaUserShield}
            title="Trusted"
            description="Thousands of satisfied clients trust our services."
          />
          <ReasonCard
            icon={FaHandshake}
            title="Personalized"
            description="Tailored solutions to meet your unique needs."
          />
          <ReasonCard
            icon={FaClock}
            title="24/7 Support"
            description="Round-the-clock assistance for your peace of mind."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
