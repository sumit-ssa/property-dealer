import { useSpring, animated } from "react-spring";
import { FeaturesData } from "../utils/Data";

const WhyChooseUs = () => {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  const featuresAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 600,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <animated.div style={headerAnimation} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-5xl mx-auto">
            We deliver exceptional service and outstanding results through our
            core strengths.
          </p>
        </animated.div>

        <animated.div
          style={featuresAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FeaturesData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-full bg-blue-50">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </animated.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
