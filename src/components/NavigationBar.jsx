import React from "react";

function NavigationBar() {
  return (
    <nav className="bg-black px-6 py-2">
      <div className="mt-1.5 flex justify-between items-center">
        <div className="logo-text text-white font-bold">Infinite Fantasy</div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
