import React from "react";

function NavigationBar() {
  return (
    <nav className="bg-black px-6 py-2">
      <div className="mt-1.5 flex justify-between items-center">
        <div className="logo-text text-white font-bold">Infinite Fantasy</div>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
