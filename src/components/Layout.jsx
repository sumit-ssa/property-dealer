/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
