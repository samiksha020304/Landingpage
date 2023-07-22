import React from 'react';

const LandingPage2 = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-800 text-white min-h-screen">
      <header className="bg-opacity-80 backdrop-blur-md py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-wide animate__animated animate__bounceInDown">
            Fitness Gym
          </h1>
          <p className="text-lg mt-2 animate__animated animate__bounceInUp">
            Your Path to a Healthier You
          </p>
        </div>
      </header>

      <section className="py-16 animate__animated animate__fadeIn">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-8 text-center animate__animated animate__bounceIn">
            Get Fit, Stay Fit!
          </h2>
          <p className="text-xl mb-12 text-center animate__animated animate__bounceIn">
            Join our fitness gym and start your journey to a healthier you.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 animate__animated animate__bounceIn">
            Sign Up Now
          </button>
        </div>
      </section>

      <section className="bg-opacity-80 backdrop-blur-md py-16 animate__animated animate__fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 animate__animated animate__bounceIn">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 animate__animated animate__bounceIn" style={{ animationDelay: '0.1s' }}>
              <i className="fas fa-dumbbell text-4xl mb-4 text-blue-300"></i>
              <h3 className="text-2xl font-bold mb-4">State-of-the-Art Equipment</h3>
              <p className="text-lg text-gray-300">
                Access to the latest gym equipment and machines.
              </p>
            </div>
            <div className="p-6 animate__animated animate__bounceIn" style={{ animationDelay: '0.2s' }}>
              <i className="fas fa-users text-4xl mb-4 text-blue-300"></i>
              <h3 className="text-2xl font-bold mb-4">Expert Trainers</h3>
              <p className="text-lg text-gray-300">
                Professional trainers to guide and motivate you.
              </p>
            </div>
            <div className="p-6 animate__animated animate__bounceIn" style={{ animationDelay: '0.3s' }}>
              <i className="fas fa-clock text-4xl mb-4 text-blue-300"></i>
              <h3 className="text-2xl font-bold mb-4">Flexible Hours</h3>
              <p className="text-lg text-gray-300">
                Open 24/7, so you can work out on your schedule.
              </p>
            </div>
            <div className="p-6 animate__animated animate__bounceIn" style={{ animationDelay: '0.4s' }}>
              <i className="fas fa-trophy text-4xl mb-4 text-blue-300"></i>
              <h3 className="text-2xl font-bold mb-4">Fitness Challenges</h3>
              <p className="text-lg text-gray-300">
                Participate in fun challenges and achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 animate__animated animate__fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white animate__animated animate__bounceIn">
            Our Gym
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden animate__animated animate__bounceIn" style={{ animationDelay: '0.1s' }}>
              <img src="1.png" alt="Gym Image 1" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden animate__animated animate__bounceIn" style={{ animationDelay: '0.2s' }}>
              <img src="1.png" alt="Gym Image 2" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden animate__animated animate__bounceIn" style={{ animationDelay: '0.3s' }}>
              <img src="1.png" alt="Gym Image 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 animate__animated animate__fadeIn">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate__animated animate__bounceIn">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 bg-opacity-50 placeholder-gray-400 px-4 py-3 mb-4 w-full rounded-lg focus:outline-none focus:ring focus:border-blue-500 animate__animated animate__bounceIn"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 bg-opacity-50 placeholder-gray-400 px-4 py-3 mb-4 w-full rounded-lg focus:outline-none focus:ring focus:border-blue-500 animate__animated animate__bounceIn"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-gray-800 bg-opacity-50 placeholder-gray-400 px-4 py-3 mb-4 w-full rounded-lg focus:outline-none focus:ring focus:border-blue-500 animate__animated animate__bounceIn"
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 animate__animated animate__bounceIn">
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-opacity-80 backdrop-blur-md py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Fitness Gym. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage2;
