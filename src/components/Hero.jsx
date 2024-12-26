/* eslint-disable react/prop-types */
import { useSpring, animated } from "react-spring";
import {
  Building2,
  Shield,
  Home,
  // Car,
  Banknote,
  FileCheck,
  // HandshakeIcon,
} from "lucide-react";

import heroImage from "../assets/hero-image.jpg";

const FloatingCard = ({ icon: Icon, title, description, className }) => {
  const props = useSpring({
    from: { transform: "translateX(20px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 300, friction: 50 },
  });

  return (
    <animated.div
      style={props}
      className={`absolute bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 ${className}`}
    >
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </animated.div>
  );
};

const StatItem = ({ number, label }) => {
  const props = useSpring({
    from: { number: 100 },
    to: { number: parseInt(number) },
    delay: 200,
  });

  return (
    <div className="text-center">
      <animated.h3 className="text-3xl font-bold text-blue-600">
        {props.number.to((n) => Math.floor(n) + "+")}
      </animated.h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-2">
                Your Trusted Partner
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Comprehensive <span className="text-blue-600">Insurance</span> &{" "}
                <span className="text-blue-600">Property</span> Solutions
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Expert guidance in insurance coverage and real estate
                investments. We offer personalized solutions for life insurance,
                property deals, vehicle coverage, and more.
              </p>
              <div className="flex gap-4 pt-2">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Get Quote →
                </button>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600">
                  Explore Properties
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <StatItem number="1000" label="Insurance Policies" />
              <StatItem number="500" label="Properties Sold" />
              <StatItem number="2000" label="Happy Clients" />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Modern property and insurance services"
                className="w-full h-auto object-cover"
              />
            </div>

            <FloatingCard
              icon={Shield}
              title="Insurance Protection"
              description="Comprehensive coverage for life & assets"
              className="top-4 left-4"
            />

            <FloatingCard
              icon={Home}
              title="Property Deals"
              description="Premium properties at best prices"
              className="bottom-4 right-4"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <FeatureCard
            icon={FileCheck}
            title="Insurance Services"
            description="Life, general, and vehicle insurance with hassle-free claims processing."
          />
          <FeatureCard
            icon={Building2}
            title="Real Estate Solutions"
            description="Find your perfect property - plots, flats, villas, and commercial spaces."
          />
          <FeatureCard
            icon={Banknote}
            title="Financial Services"
            description="Property loans, vehicle loans, and customized financial solutions."
          />
        </div>
      </div>
    </div>
  );
}
