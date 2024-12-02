import React from "react";

const Navbar = () => {
  return (
    <header className="absolute w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo">
          <a href="https://abhyanjana.com">
            <img
              src="https://abhyanjana.com/wp-content/uploads/2023/08/abhyanjana-logo.png"
              alt="Abhyanjana"
              className="h-12"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="https://abhyanjana.com/about-us/"
            className="text-white hover:text-gray-200 text-lg font-medium"
          >
            About Us
          </a>
          <a
            href="https://abhyanjana.com/products/"
            className="text-white hover:text-gray-200 text-lg font-medium"
          >
            Products
          </a>
          <a
            href="https://abhyanjana.com/blogs/"
            className="text-white hover:text-gray-200 text-lg font-medium"
          >
            Blogs
          </a>
          <a
            href="https://abhyanjana.com/contact-us/"
            className="text-white hover:text-gray-200 text-lg font-medium"
          >
            Contact Us
          </a>
        </nav>

        {/* Cart Section */}
        <div className="flex items-center space-x-4">
          <span className="text-white text-lg font-medium hidden sm:inline">
            ₹0.00
          </span>
          <a
            href="#"
            className="relative flex items-center text-white text-lg font-medium hover:text-gray-200"
          >
            <i className="text-2xl">🛒</i>
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-sm px-2">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
