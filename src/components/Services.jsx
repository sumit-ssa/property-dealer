/* eslint-disable react/prop-types */

import { useSpring, animated } from "react-spring";
import { Shield, Home, Car, Banknote, FileText, Building } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, items }) => {
  const [props, set] = useSpring(() => ({
    transform: "scale(1)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }));

  return (
    <animated.div
      style={props}
      onMouseEnter={() =>
        set({
          transform: "scale(1.05)",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        })
      }
      onMouseLeave={() =>
        set({
          transform: "scale(1)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        })
      }
      className="bg-white rounded-xl p-6 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            {item}
          </li>
        ))}
      </ul>
      {/* <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
        Learn More →
      </button> */}
    </animated.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Insurance & Real Estate",
      items: ["Life Insurance", "General Insurance", "Property Deals"],
    },
    {
      icon: Car,
      title: "Automobile Service",
      items: ["Vehicle Insurance", "Claims Assistance", "RC Renewal"],
    },
    {
      icon: Banknote,
      title: "Finance Services",
      items: ["Property Loans", "Vehicle Loans", "Purchase Loans"],
    },
    {
      icon: FileText,
      title: "RTO Service",
      items: ["Vehicle Documentation", "License Renewal", "Permit Assistance"],
    },
    {
      icon: Home,
      title: "Residential Real Estate",
      items: ["Apartments", "Villas", "Plot Sales"],
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      items: ["Office Spaces", "Retail Outlets", "Industrial Properties"],
    },
  ];

  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <animated.div style={fadeIn} className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Our Services
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-5xl mx-auto">
          Comprehensive solutions for all your insurance and real estate needs.
          Explore our wide range of services designed to protect your assets and
          help you find your dream property.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </animated.div>
    </section>
  );
};

export default Services;
