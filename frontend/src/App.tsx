// import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <Navigation />
      <main>
        <Hero />
        <Features />
      </main>
      <footer className="bg-gray-900 text-white py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About SeaGro</h3>
              <p className="text-gray-400">
                Empowering professionals through community, learning, and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400 cursor-pointer">
                <li>Learning Center</li>
                <li>Job Board</li>
                <li>Community</li>
                <li>Bike Sharing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 cursor-pointer">
                <li>Documentation</li>
                <li>API</li>
                <li>Support</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 cursor-pointer">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 SeaGro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;