import React, { useState, useEffect } from 'react';

const LandingPage3 = () => {
  const featuredProducts = [
    {
      name: 'Product 1',
      gif: 'hello.gif',
    },
    {
      name: 'Product 2',
      gif: 'hello.gif',
    },
    {
      name: 'Product 3',
      gif: 'hello.gif',
    },
    // Add more featured products as needed
  ];

  const [showQuiz, setShowQuiz] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (countdown > 0 && showQuiz) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (showQuiz) {
      setShowResult(true);
      setShowQuiz(false);
    }
    return () => clearInterval(timer);
  }, [countdown, showQuiz]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowResult(true);
    setShowQuiz(false);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCountdown(30);
    setShowQuiz(true);
  };

  return (
    <div className="bg-gradient-to-tl from-purple-600 via-purple-500 to-pink-500 text-white min-h-screen">
      {/* Header */}
      <header className="py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-wide">E-Commerce Store</h1>
          <p className="text-lg mt-2">Your One-Stop Shop for Everything!</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-8 text-center">Discover Amazing Deals</h2>
          <p className="text-xl mb-12 text-center">Shop for your favorite products at unbeatable prices.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            Explore Products
          </button>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="bg-opacity-80 backdrop-blur-md py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img src={product.gif} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4 bg-white text-center">
                  <p className="text-xl font-bold mb-2">{product.name}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      {showQuiz && (
        <section className="py-16 bg-opacity-80 backdrop-blur-md text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-6">Quiz Time!</h2>
            <p className="text-xl mb-12">
              Answer the following question correctly within {countdown} seconds to get exciting offers:
            </p>
            <div className="grid grid-cols-1 gap-4">
              <p className="text-lg font-bold mb-2">What is the capital of France?</p>
              <button
                className={`${
                  selectedOption === 'paris' ? 'bg-blue-600' : 'bg-blue-700'
                } text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300`}
                onClick={() => handleOptionSelect('paris')}
                disabled={showResult}
              >
                Paris
              </button>
              <button
                className={`${
                  selectedOption === 'london' ? 'bg-blue-600' : 'bg-blue-700'
                } text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300`}
                onClick={() => handleOptionSelect('london')}
                disabled={showResult}
              >
                London
              </button>
            </div>
            {showResult && (
              <div className="mt-8">
                {selectedOption === 'paris' ? (
                  <p className="text-lg text-green-500 font-bold">Correct Answer!</p>
                ) : (
                  <p className="text-lg text-red-500 font-bold">Oops! Incorrect Answer.</p>
                )}
                <button
                  className="mt-4 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  onClick={resetQuiz}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Countdown Timer */}
      {showQuiz && (
        <section className="py-8 bg-blue-800 text-center">
          <p className="text-white font-bold text-xl">Time Remaining: {countdown} seconds</p>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-opacity-80 backdrop-blur-md py-6 text-center">
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage3;
