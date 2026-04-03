import React from "react";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

/***
 * Footer Component
 * ----------------
 * This component renders the website footer including newsletter subscription,
 * navigation links, social media, and contact information.
 *
 * Key Features:
 * - Top decorative arrows for visual design
 * - Newsletter subscription section:
 *    - Heading with responsive font sizes
 *    - Description text
 *    - Subscribe button with hover-scale effect
 * - Footer navigation section:
 *    - Four columns: Company, Terms & Policies, Follow Us, Connect
 *    - Hover effects for clickable items (hover-scale-color)
 *    - Responsive layout with flex and spacing
 * - Bottom copyright section
 * - Fully responsive and visually aligned with Figma design
 */


function Footer() {
  return (
    <div className=" bg-[#D7EEDD]">
      <div className="flex justify-center items-center ">
        <img src={arrow1} alt="" />
        <img src={arrow2} alt="" />
      </div>

      <div>
        <h1 className="font-gerbil text-center text-4xl md:text-6xl pt-6 hover-scale-size">
          Subscribe to <br />
          our newsletter
        </h1>
        <p className="font-satoshi text-center text-[14px] py-4">
          To make your stay special and even more memorable
        </p>

        <div className="text-center">
          <button className="bg-black  text-white text-center py-3 px-3 border rounded-4xl hover-scale">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="flex justify-around py-6 my-6 border-t border-t-black">
        <div>
          <h3 className="font-gerbil pb-2 text-[14px]">Company</h3>
          <ul>
            <li className="text-[12px] pb-1 hover-scale-color">Home</li>
            <li className="text-[12px] pb-1 hover-scale-color">Studio</li>
            <li className="text-[12px] pb-1 hover-scale-color">Service</li>
            <li className="text-[12px] pb-1 hover-scale-color">Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-gerbil pb-2 text-[14px]">Terms & Policies</h3>
          <ul>
            <li className="text-[12px] pb-1 hover-scale-color">
              Privacy Policy
            </li>
            <li className="text-[12px] pb-1 hover-scale-color">
              Terms & Conditions
            </li>
            <li className="text-[12px] pb-1 hover-scale-color">Explore</li>
            <li className="text-[12px] hover-scale-color">Accesibility</li>
          </ul>
        </div>

        <div>
          <h3 className="font-gerbil pb-2 text-[14px]">Follow Us</h3>
          <ul>
            <li className="text-[12px] pb-1 hover-scale-color">Instagram</li>
            <li className="text-[12px] pb-1 hover-scale-color">LinkedIn</li>
            <li className="text-[12px] pb-1 hover-scale-color">Youtube</li>
            <li className="text-[12px] hover-scale-color">Twitter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-gerbil pb-2 text-[14px]">Connect</h3>
          <ul>
            <li className="text-[12px] pb-1">
              1498w Fluton ste, STE 2D Chicgo, IL 63867.
            </li>
            <li className="text-[12px] pb-1">(123) 456789000</li>
            <li className="text-[12px]">info@elementum.com</li>
          </ul>
        </div>
      </div>
      <div className="pb-6">
        <p className="text-[10px] text-center">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
