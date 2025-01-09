/* eslint-disable react/prop-types */

import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { X } from "lucide-react";
import {
  constructWhatsAppUrl,
  serviceTypes,
  springConfig,
  subServiceTypes,
} from "../../utils/generalserviceForm";

const GeneralInquiryForm = ({ setGenaralInquiry }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    subServiceType: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "serviceType") {
      setFormData((prevData) => ({
        ...prevData,
        subServiceType: "",
      }));
    }

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
    if (!formData.serviceType)
      newErrors.serviceType = "Service Type is required";
    if (!formData.subServiceType)
      newErrors.subServiceType = "Sub-Service Type is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

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

      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        subServiceType: "",
        description: "",
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
          className="mx-auto p-8 bg-white rounded-2xl shadow-2xl relative"
        >
          <button
            onClick={() => setGenaralInquiry(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">
            General Services Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                >
                  <option value="">Select Service</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.serviceType}
                  </p>
                )}
              </animated.div>

              <animated.div style={inputAnimation} className="w-full">
                <label
                  htmlFor="subServiceType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sub-Service Type
                </label>
                <select
                  id="subServiceType"
                  name="subServiceType"
                  value={formData.subServiceType}
                  onChange={handleChange}
                  disabled={!formData.serviceType}
                  className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
                >
                  <option value="">Select Sub-service</option>
                  {formData.serviceType &&
                    subServiceTypes[formData.serviceType].map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                </select>
                {errors.subServiceType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.subServiceType}
                  </p>
                )}
              </animated.div>
            </div>

            <animated.div style={inputAnimation} className="w-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Brief Description of Requirement
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="2"
                className="w-full rounded-md p-2 border-gray-700 fo border transition duration-200"
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description}
                </p>
              )}
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

export default GeneralInquiryForm;
