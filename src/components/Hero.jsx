import { useSpring, animated } from "react-spring";
import { Shield, Home } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

export default function Hero() {
  const fadeUp = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 280, friction: 20 },
  });
  const fadeDelay1 = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { tension: 240, friction: 20 },
  });
  const fadeDelay2 = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: { tension: 240, friction: 20 },
  });
  const slideLeft = useSpring({
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    delay: 600,
    config: { tension: 240, friction: 50 },
  });
  const slideRight = useSpring({
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    delay: 800,
    config: { tension: 240, friction: 50 },
  });
  const [buttonProps, buttonApi] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <animated.div
              style={fadeUp}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              Your Trusted Partner
            </animated.div>
            <animated.h1
              style={fadeDelay1}
              className="text-3xl lg:text-5xl font-bold !leading-tight"
            >
              Comprehensive <span className="text-blue-600">Insurance</span> &
              <br />
              <span className="text-blue-600">Property</span> Solutions
            </animated.h1>
            <animated.p
              style={fadeDelay1}
              className="text-gray-600 text-lg max-w-xl lg:max-w-2xl"
            >
              Expert guidance in insurance coverage and real estate investments.
              We offer personalized solutions for life insurance, property
              deals, vehicle coverage, and more.
            </animated.p>
            <animated.button
              style={{
                ...fadeDelay2,
                transform: buttonProps.scale.to((s) => `scale(${s})`),
              }}
              onMouseEnter={() => buttonApi.start({ scale: 1.05 })}
              onMouseLeave={() => buttonApi.start({ scale: 1 })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </animated.button>
            <animated.div style={fadeDelay2} className="grid grid-cols-3 gap-8">
              {[
                { number: "1000+", label: "Insurance Policies" },
                { number: "500+", label: "Properties Sold" },
                { number: "2000+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-start">
                  <h3 className="text-blue-600 text-2xl lg:text-3xl font-bold">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </animated.div>
          </div>
          <div className="relative">
            <animated.div
              style={fadeDelay1}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={heroImage}
                alt="Modern apartment buildings"
                className="w-full h-full object-cover"
              />
              <animated.div
                style={slideLeft}
                className="absolute top-8 left-8 bg-white p-4 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Insurance Protection</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive coverage for life & assets
                    </p>
                  </div>
                </div>
              </animated.div>
              <animated.div
                style={slideRight}
                className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Property Deals</h3>
                    <p className="text-sm text-gray-600">
                      Premium properties at best prices
                    </p>
                  </div>
                </div>
              </animated.div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
