import React from 'react';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Copyright */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
             <Logo/>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-gray-700 font-semibold mb-4 text-base sm:text-lg lg:text-xl">SELL A HOME</h3>
              <ul className="text-gray-500">
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Request an offer</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Pricing</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Reviews</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Stories</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-gray-700 font-semibold mb-4 text-base sm:text-lg lg:text-xl">BUY, RENT AND SELL</h3>
              <ul className="text-gray-500">
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Buy and sell properties</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Rent home</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Builder trade-up</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-gray-700 font-semibold mb-4 text-base sm:text-lg lg:text-xl">ABOUT</h3>
              <ul className="text-gray-500">
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Company</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">How it works</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Contact</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Investors</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-gray-700 font-semibold mb-4 text-base sm:text-lg lg:text-xl">RESOURCES</h3>
              <ul className="text-gray-500">
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Blog</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Guides</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">FAQ</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Help Center</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-gray-700 font-semibold mb-4 text-base sm:text-lg lg:text-xl">TERMS & PRIVACY</h3>
              <ul className="text-gray-500">
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Trust & Safety</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Terms of Service</a></li>
                <li><a href="#" className="hover:underline text-sm sm:text-base lg:text-lg">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

      
      </div>
        <div className='flex flex-col lg:flex-row justify-between items-center px-10 pt-5'>
          <p className="text-gray-500 mb-4 lg:mb-0">©2021 Estatery. All rights reserved</p>
          <div className="flex justify-center mt-8 lg:mt-0">
            {/* Social Media Links */}
            <a href="#" className="text-gray-500 hover:text-gray-900 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
