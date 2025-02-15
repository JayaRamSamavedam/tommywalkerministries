import React from "react";
import Logo from "../../assets/TMWLogo.png";

const Nav: React.FC = () => {
  return (
    <nav className="bg-white p-12 ">
        <div className="px-10">
      <div className="container mx-auto flex items-center justify-between gap- py-4">
        <div className="flex items-center space-x-3 px-4 ml-16 ">
          <img src={Logo} alt="Logo" className="w-24 h-24 rounded-full" />
        </div>

        <div className="flex flex-row justify-end mr-20">
         
        <ul className="flex space-x-6 text-gray-800 font-semibold text-sm justify-">
          <li>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#media" className="hover:underline">
              MEDIA
            </a>
          </li>
          <li>
            <a href="#events" className="hover:underline">
              EVENTS
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:underline">
              RESOURCES
            </a>
          </li>
          <li>
            <a href="#store" className="hover:underline">
              STORE
            </a>
          </li>
          <li>
            <a href="#international" className="hover:underline">
              INTERNATIONAL
            </a>
          </li>
          <li>
            <a
              href="#give"
              className="text-red-600 font-bold hover:text-red-800"
            >
              GIVE
            </a>
          </li>
          <li>
          <div className="relative">
            <button
              aria-label="Cart"
              className="text-gray-800 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
              0
            </span>
          </div>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
