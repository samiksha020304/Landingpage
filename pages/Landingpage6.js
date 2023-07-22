import React from 'react';

const LandingPage6 = () => {
  return (
    <div 
    className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 
    via-lime-400 to-lime-500 via-emerald-400 from-teal-500 
    text-white min-h-screen"
  >
      {/* Navbar */}
      <nav className="bg-opacity-90 backdrop-blur-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Extraordinary Blog</h1>
        <ul className="flex space-x-6 text-lg">
          <li className="cursor-pointer hover:text-green-100">Home</li>
          <li className="cursor-pointer hover:text-green-100">About</li>
          <li className="cursor-pointer hover:text-green-100">Blog</li>
          <li className="cursor-pointer hover:text-green-100">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our World</h1>
          <p className="text-xl mb-12">Discover a new experience with us</p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-100">
            Explore Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-opacity-80 backdrop-blur-md py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Service 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Service 2</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Service 3</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <p className="text-lg italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="mt-4 font-bold">- John Doe</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <p className="text-lg italic">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat."
              </p>
              <p className="mt-4 font-bold">- Jane Smith</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <p className="text-lg italic">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur."
              </p>
              <p className="mt-4 font-bold">- Mike Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-opacity-80 backdrop-blur-md text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12">
            Join us today and experience the amazing journey with us.
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-100">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 py-6 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage6;
