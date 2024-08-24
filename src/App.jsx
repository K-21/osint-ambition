import React from 'react';
import Example from './components/Navbar';

function LandingPage() {
  return (
    <div className="bg-gray-900 text-white">
      <div className='mx-0'>
        <Example />
      </div>
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your OSINT Gateway
          </h1>
          <p className="text-lg mb-8">
            Discover. Innovate. Master the Future.
          </p>
          <p className="text-lg mb-8">
            Welcome to OSINT Invention, your one-stop shop for comprehensive OSINT resources. We offer a wide range of tools, techniques, and training to help you uncover information, build investigations, and stay ahead of the curve. Our platform is designed to empower individuals, businesses, and organizations to harness the power of open-source intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Discover OSINT Resources
            </h3>
            <p className="mb-2">
              Access a vast library of curated OSINT resources, including databases, tools, and techniques.
            </p>
            <p className="mb-2">
              Learn about different OSINT methodologies, such as social media analysis, website scraping, and data visualization.
            </p>
            <p>
              Develop your OSINT skills through interactive training modules and real-world case studies.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Customize Your OSINT Experience
            </h3>
            <p className="mb-2">
              Tailor your OSINT journey with personalized dashboards and alerts.
            </p>
            <p className="mb-2">
              Track specific keywords, individuals, or organizations to stay up-to-date on their activities.
            </p>
            <p>
              Collaborate with other OSINT professionals and share your findings through our secure platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              OSINT Training
            </h3>
            <p className="mb-2">
              Learn from experienced OSINT instructors through our comprehensive training programs.
            </p>
            <p className="mb-2">
              Master the latest OSINT techniques and tools to enhance your investigative capabilities.
            </p>
            <p>
              Gain practical experience through hands-on exercises and real-world simulations.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Our Products
            </h3>
            <p className="mb-2">
              Explore our suite of OSINT products designed to streamline your investigations.
            </p>
            <p className="mb-2">
              Choose from a range of tools, including data analysis software, social media monitoring platforms, and more.
            </p>
            <p>
              Get the resources you need to conduct effective OSINT research and achieve your goals.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              OSINT Consulting
            </h3>
            <p className="mb-2">
              Get expert guidance and support from our team of OSINT professionals.
            </p>
            <p className="mb-2">
              We offer custom consulting services tailored to your specific needs.
            </p>
            <p>
              Let us help you develop an OSINT strategy, conduct investigations, and achieve your desired outcomes.
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            What Our Clients Say About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://source.unsplash.com/random"
                alt="Client Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">
                  John Doe
                </h3>
                <p className="text-sm">
                  CEO, Acme Corp
                </p>
              </div>
            </div>
            <p className="mb-4">
              "OSINT Invention has been an invaluable resource for our company. Their comprehensive tools and training have significantly enhanced our OSINT capabilities and helped us gain critical insights. We highly recommend their services to anyone looking to master the power of open-source intelligence."
            </p>
          </div>
          </div>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Discover new possibilities
          </h2>
          <p className="text-lg mb-8">
            Join our community of OSINT professionals and unlock a world of possibilities.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <div className="col-span-2 md:col-span-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign up for free
              </button>
            </div>
          </form>
          <div className="flex items-center mt-4">
            <img
              src="https://source.unsplash.com/random"
              alt="Profile Picture"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-bold">
                Join us today!
              </p>
              <p className="text-sm">
                "Unlock the power of OSINT and stay ahead of the curve."
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-700 py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">
                OSINT Invention
              </h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <a href="/public/policy/Terms.pdf" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/public/policy/privacy.pdf" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/public/policy/refund.pdf" className="hover:underline">
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">
                Resources
              </h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    OSINT Tutorials
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    OSINT Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    OSINT Case Studies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">
              &copy; 2023 OSINT Invention. All rights reserved.
            </p>
            <p className="text-sm">
              &copy; Developed by Kritika Agrawal
            </p>
            <div className="mt-4">
              <a href="#" className="text-gray-400 hover:text-white mr-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;