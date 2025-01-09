/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { X } from "lucide-react";
import {
  propertyTypes,
  transactionTypes,
  constructWhatsAppUrl,
  springConfig,
} from "../../utils/realestateForm";

const RealEstateForm = ({ setRestateInquiry }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    transactionType: "",
    location: "",
    budget: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.propertyType)
      newErrors.propertyType = "Property Type is required";
    if (!formData.transactionType)
      newErrors.transactionType = "Transaction Type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const whatsappUrl = constructWhatsAppUrl(formData);
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      // Reset form after submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyType: "",
        transactionType: "",
        location: "",
        budget: "",
        additionalInfo: "",
      });
    }
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: springConfig,
  });

  const inputAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: springConfig,
  });

  return (
    <div className="fixed inset-0 top-0 bg-black/90 px-5 lg:py-10 z-50 overflow-auto">
      <div className="w-full max-w-lg mx-auto relative py-5">
        <animated.div
          style={formAnimation}
          className="mx-auto p-5 bg-white rounded-xl shadow-2xl relative"
        >
          <button
            onClick={() => setRestateInquiry(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">
            Real Estate Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <animated.div style={inputAnimation} className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </animated.div>
            <div className="flex flex-col lg:flex-row gap-5 w-full justify-between">
              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </animated.div>

              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </animated.div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 w-full justify-between">
              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                >
                  <option value="">Select a property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.propertyType}
                  </p>
                )}
              </animated.div>

              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="transactionType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Transaction Type
                </label>
                <select
                  id="transactionType"
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                >
                  <option value="">Select Transaction type</option>
                  {transactionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.transactionType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.transactionType}
                  </p>
                )}
              </animated.div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 w-full justify-between">
              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Location
                </label>
                <input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                ></input>
              </animated.div>

              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Budget (If Applicable)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                />
              </animated.div>
            </div>

            <animated.div style={inputAnimation} className="w-full">
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="2"
                className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
              ></textarea>
            </animated.div>

            <animated.div style={inputAnimation} className="w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </animated.div>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default RealEstateForm;
