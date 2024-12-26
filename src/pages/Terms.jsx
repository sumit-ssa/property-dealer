import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Terms & Conditions
        </h1>
        <div className="">
          <p className="mb-4">
            Welcome to The Insurance Zone. By using our website and services,
            you agree to the following terms:
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Services</h2>
          <p>
            We provide real estate solutions, including buying, selling,
            renting, and advisory services. Availability may vary.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            User Responsibility
          </h2>
          <p>
            Users must provide accurate information and be at least 18 years
            old. Misuse will result in the termination of access.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Property Listings
          </h2>
          <p>
            Listings are based on third-party data. We are not liable for
            discrepancies or transaction issues.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Payments</h2>
          <p>
            Service fees and refunds follow our policies, which are outlined
            during transactions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Liability</h2>
          <p>
            We are not responsible for any damages or losses arising from the
            use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Privacy</h2>
          <p>Your data is handled per our Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Jurisdiction</h2>
          <p>
            Indian laws govern these terms, and disputes will be resolved in
            Bangalore.
          </p>

          <p className="mt-6">For queries, contact us at 6362341626.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
