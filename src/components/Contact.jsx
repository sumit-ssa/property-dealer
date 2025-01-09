/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { MessageSquare, Home } from "lucide-react";
import RealEstateForm from "./enquiry/RealEstateForm";
import GeneralInquiryForm from "./enquiry/GeneralInquiryForm";

const Contact = () => {
  const [restateInquiry, setRestateInquiry] = useState(false);
  const [genaralInquiry, setGenaralInquiry] = useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.section
      style={fadeIn}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="contact"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Contact Us Today</h2>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          We're here to help with all your inquiries. Choose the option that
          best fits your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <button
            onClick={() => setGenaralInquiry(true)}
            className="flex items-center px-6 py-3 bg-blue-600 w-full max-w-[280px] justify-center text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <MessageSquare className="mr-2" size={20} />
            General Service Inquiry
          </button>
          <button
            onClick={() => setRestateInquiry(true)}
            className="flex items-center px-6 py-3 bg-green-600 w-full max-w-[280px] justify-center text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Home className="mr-2" size={20} />
            Real Estate Inquiry
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-6">
          Click on the button that best matches your inquiry type, and we'll
          guide you through the process.
        </p>
      </div>
      {restateInquiry && (
        <RealEstateForm setRestateInquiry={setRestateInquiry} />
      )}

      {genaralInquiry && (
        <GeneralInquiryForm setGenaralInquiry={setGenaralInquiry} />
      )}
    </animated.section>
  );
};

export default Contact;
