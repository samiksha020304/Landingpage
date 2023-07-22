import React from 'react';

const LandingPage5 = () => {
  const recentBlogPosts = [
    {
      title: 'Post Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      gifUrl: 'https://example.com/gif1.gif',
    },
    {
      title: 'Post Title 2',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      gifUrl: 'https://example.com/gif2.gif',
    },
    {
      title: 'Post Title 3',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      gifUrl: 'https://example.com/gif3.gif',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white min-h-screen">
      {/* Header */}
      <header className="py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-wide">My Personal Blog</h1>
          <p className="text-lg mt-2">Welcome to my world of thoughts and ideas.</p>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img
              src="profile.jpg"
              alt="My Profile"
              className="w-48 h-48 rounded-full object-cover md:order-2"
            />
            <div className="md:order-1">
              <h2 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h2>
              <p className="text-xl mb-6">
                Welcome to my personal blog where I share my thoughts, experiences, and ideas
                with the world. Join me on this journey of self-discovery and learning.
              </p>
              <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-lg hover:bg-orange-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="bg-opacity-80 backdrop-blur-md py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                <img src={'https://cdn.dribbble.com/users/1299339/screenshots/3065748/blogging_d_1.gif'} alt={post.title} className="w-full h-48 object-cover mb-4" />
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Newsletter */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Subscribe to My Personal Blog</h2>
          <p className="text-xl mb-12 text-white">
            Stay updated with the latest blog posts by subscribing.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-64 md:w-96 rounded-l-lg border-t mr-0 md:mr-2"
            />
            <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-r-lg hover:bg-orange-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-opacity-80 backdrop-blur-md py-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage5;
