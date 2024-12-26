const Contact = () => {
  return (
    <section className="py-20 bg-blue-100" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">Contact Us Today</h2>
        <p className="text-xl mb-8">
          Explore your options with The Insurance Zone
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="tel:6362341626"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
