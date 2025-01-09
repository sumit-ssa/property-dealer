import { MoveRight } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-xl lg:text-3xl text-center mb-20 font-bold !leading-snug">
          About The Insurance Zone
        </h3>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-4xl font-bold !leading-snug">
              Welcome to The Insurance Zone!
            </h2>
            <p className="text-lg">
              I am Surindeer Gahlot an experienced insurance professional who
              has been working in the field since 2006. I have over 18 years of
              experience in the insurance industry, having worked with a variety
              of insurance products and services.
            </p>
            <p className="text-lg">
              My career began as a manager at a Maruti Suzuki dealership, where
              I worked until 2020. After that, I started my own business and
              began using my expertise in insurance and real estate.
            </p>
            <p className="text-lg">
              Today, I provide personal and business insurance solutions to my
              clients through The Insurance Zone, as well as my services in real
              estate. My goal is to provide my clients with the information and
              services they need for their financial security and stability.
            </p>
            <p className="text-lg">
              I am committed to building a strong and trusting relationship with
              my clients. I am always ready to understand my clients'
              requirements and solve their problems.
            </p>
            <p className="text-lg">
              I hope you will collaborate with The Insurance Zone to meet your
              insurance and real estate needs. I look forward to serving you!”
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Expertise</h3>
            <ul className="list-none">
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Specialization in insurance and real estate.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Solutions for your financial goals.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Personalized solutions in insurance and real estate.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Help secure your financial future.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Trusted</h3>
            <ul className="list-none">
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Trusted solutions for your financial future.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Trusted expertise in insurance and real estate.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Trusted guidance for your financial goals.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Trusted help in securing your financial future.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Personalized</h3>
            <ul className="list-none">
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Customized solutions for your individual financial goals.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Personalized insurance and real estate solutions for your
                specific needs.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Customized guidance for your personal financial future.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Personalized financial planning for your specific needs.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">24/7 Support</h3>
            <ul className="list-none">
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                24/7 support for your financial queries.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                24/7 support in insurance and real estate.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                24/7 support and guidance for your financial future.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                24/7 support anytime, anywhere.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Contact Us Today</h3>
            <ul className="list-none">
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Contact us today and secure your financial future.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Contact us now and speak to our experts.
              </li>
              <li className="flex gap-2 text-sm lg:text-lg">
                <MoveRight className="opacity-80" />
                Contact us today and take our help to achieve your financial
                goals.
              </li>
            </ul>
          </div>

          {/* <ul className="list-disc list-inside mb-6">
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
            <p>
              <strong>Address:</strong> Visalakshi Prakruthi office, Thanisandra
              Main Road Bangalore
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
