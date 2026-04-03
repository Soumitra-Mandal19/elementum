import React from "react";
import arrow from "../assets/arrow.png";

/***
 * OfferSection Component
 * ---------------------
 * This is a reusable section component to display individual offers, services, or highlights.
 * 
 * Props:
 * - smallText: Subheading or category text (smaller font)
 * - bigText: Main heading or offer title (larger font)
 * 
 * Key Features:
 * - Grid layout with three columns: smallText | bigText | arrow icon
 * - Hover interactions:
 *    - bigText has hover color + scale effect (hover-scale-color)
 *    - arrow image has hover scale effect (hover-scale)
 * - Responsive design with Tailwind grid and text sizing
 * - Border-top separates each offer visually
 * - Fully reusable for multiple offers in the Offers component
 */

function OfferSection({ smallText, bigText }) {
  return (
    <>
      <div className="max-w-5xl mx-auto border-t border-t-[#B1B1B1] grid grid-cols-[250px_1fr_60px] gap-6 py-10 items-center">
        <div>
          <p className="font-satoshi text-[15px] lg:text-base shrink-0 ">
            {smallText}
          </p>
        </div>

        <div>
          <h3 className="font-gerbil text-lg md:text-2xl lg:text-3xl hover-scale-color">
            {bigText}
          </h3>
        </div>

        <div>
          <img className="hover-scale" src={arrow} />
        </div>
      </div>
    </>
  );
}

export default OfferSection;
