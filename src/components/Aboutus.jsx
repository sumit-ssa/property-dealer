import { useSpring, animated } from "react-spring";

import image from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";

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
              I am Surindeer Gahlot an experienced insurance professional who
              has been working in the field since 2006. I have over 18 years of
              experience in the insurance industry, having worked with a variety
              of insurance products and services. My career began as a manager
              at a Maruti Suzuki dealership, where I worked until 2020. After
              that, I started my own business and began using my expertise in
              insurance and real estate.
            </p>
            <p className="text-gray-600 mb-6">
              Today, I provide personal and business insurance solutions to my
              clients through The Insurance Zone, as well as my services in real
              estate. My goal is to provide my clients with the information and
              services they need for their financial security and stability. I
              am committed to building a strong and trusting relationship with
              my clients. I am always ready to understand my clients&rsquo;
              requirements and solve their problems. I hope you will collaborate
              with The Insurance Zone to meet your insurance and real estate
              needs. I look forward to serving you!”
            </p>
            <Link
              to={"/about"}
              className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Aboutus;
