import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            className="text-2xl font-sans font-bold text-gray-800 cursor-pointer"
          >
            The Insurance Zone
          </Link>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-800 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-800 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-800 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
