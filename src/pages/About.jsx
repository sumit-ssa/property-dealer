import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          About The Insurance Zone
        </h1>
        <div>
          <p className="text-lg mb-6">
            The Insurance Zone is a trusted real estate company in India that
            connects clients with ideal properties. With our experienced team
            and extensive network, we provide comprehensive real estate
            solutions tailored to meet your unique needs.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Residential & Commercial Sales</li>
            <li>Rentals & Leasing</li>
            <li>Property Investment Advice</li>
            <li>Legal & Financial Consultation</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Experienced team with market expertise</li>
            <li>Transparent and customer-focused approach</li>
            <li>Extensive property network</li>
          </ul>
          <p className="text-lg font-semibold">
            Contact us today to explore your options!
          </p>
          <div className="mt-6">
            <p>
              <strong>Email : </strong> naman982825@gmail.com
            </p>
            <p>
              <strong>Phone : </strong>+91 9828808726
            </p>
            {/* <p>
              <strong>Address:</strong> Visalakshi Prakruthi office, Thanisandra
              Main Road Bangalore
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
