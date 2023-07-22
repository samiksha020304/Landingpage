import React, { useState } from 'react';

const LandingPage4 = () => {
  const [email, setEmail] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubscribe = () => {
    // Implement your subscription logic here.
    // For this example, we will simply log the email.
    console.log('Subscribed email:', email);
    closePopup();
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const featuredNews = [
    {
      title: 'Breaking News',
      content: 'Read about the latest breaking news from around the world.',
    },
    {
      title: 'In-depth Analysis',
      content: 'Get in-depth analysis and insights on important topics.',
    },
    {
      title: 'Entertainment Buzz',
      content: 'Stay updated with the latest news from the entertainment industry.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">News Portal</h1>
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:text-blue-300">Home</li>
            <li className="cursor-pointer hover:text-blue-300">Politics</li>
            <li className="cursor-pointer hover:text-blue-300">Sports</li>
            <li className="cursor-pointer hover:text-blue-300">Technology</li>
            <li className="cursor-pointer hover:text-blue-300">Entertainment</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Stay Informed</h2>
          <p className="text-xl mb-12">Get the latest news from around the world at your fingertips.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-100">
            Explore News
          </button>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Politics</h3>
              <p>Stay updated with the latest political developments and news.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Sports</h3>
              <p>Get the latest scores, highlights, and news from the sports world.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Technology</h3>
              <p>Explore the latest technology trends and innovations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured News</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredNews.map((newsItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">{newsItem.title}</h3>
                <p>{newsItem.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-600 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-12">Stay up to date with the latest news and updates.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-64 md:w-96 rounded-l-lg border-t mr-0 md:mr-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-white text-gray-600 font-bold py-3 px-6 rounded-r-lg hover:bg-blue-100"
              onClick={openPopup}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Popup/Overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-lg mb-8">Stay up to date with the latest news and updates.</p>
            <div className="flex justify-center">
             {/* <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-64 md:w-96 rounded-l-lg border-t mr-0 md:mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />*/}
              <button
                className="bg-white text-gray-600 font-bold py-3 px-6 rounded-r-lg hover:bg-blue-100"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
              <button
                className="ml-4 text-red-600 font-bold py-3 px-6 hover:bg-red-100 rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-white text-center">
        <p>&copy; {new Date().getFullYear()} News Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage4;
