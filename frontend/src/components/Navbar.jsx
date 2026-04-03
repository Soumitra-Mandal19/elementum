import React, { useState } from "react";

/***
 * Navbar Component
 * ----------------
 * This component renders the main navigation bar for the website.
 * Key Features:
 * - Responsive: Shows a horizontal menu on medium+ screens and a hamburger menu on smaller screens.
 * - Interactive:
 *   - Hamburger icon toggles the mobile menu.
 *   - Menu items have hover effects (scale and bold) using reusable Tailwind classes.
 * - Uses React useState to track mobile menu open/close state.
 * - Tailwind classes ensure padding, spacing, font styles, and shadows.
 * - Designed to match the provided Figma layout.
 */



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  /**
   * hidden -> hides desktop menu by default
   * md:flex -> shows desktop menu on medium+ screens
   * md:hidden -> hides hamburger on medium+ screens
   */

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-6 relative ">
      <div className="text-xl font-medium font-gerbil hover-scale p-4 ">
        Elementum
      </div>
      <div>
        <ul className="hidden md:flex gap-8 text-sm">
          <li className="hover-scale-bold">Home</li>
          <li className="hover-scale-bold">Studio</li>
          <li className="hover-scale-bold">Services</li>
          <li className="hover-scale-bold">Contact</li>
          <li className="hover-scale-bold">FAQs</li>
        </ul>
      </div>
      <div onClick={toggleMenu} className="text-2xl hover-scale cursor-pointer">
        =
      </div>
      {menuOpen && (
        <ul className="absolute top-full right-6 bg-white shadow-lg rounded-md flex flex-col gap-4 p-4 md:hidden z-1">
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">
            Home
          </li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">
            Studio
          </li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">
            Services
          </li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">
            Contact
          </li>
          <li onClick={() => setMenuOpen(false)} className="cursor-pointer">
            FAQs
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
