import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-semibold my-4">The Insurance Zone</h3>
            <p className="text-gray-400">
              Comprehensive Insurance and Real Estate Solutions
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={"#home"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to={"about"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"privacy"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policies
                </Link>
              </li>

              <li>
                <Link
                  to={"terms"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">
                Phone : 9828808726
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Email : naman982825@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Powered by - The Insurance Zone </p>
          <p>
            &copy; {new Date().getFullYear()} The Insurance Zone. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
