import React from "react";
import yellowUnderline from "../assets/yellow_underline.svg";
import UnderlineWord from "./UnderlineWord";
import OfferSection from "./OfferSection";

/***
 * Offers Component
 * ----------------
 * This component renders the "Offers" section of the webpage, showcasing
 * multiple offerings or services.
 * 
 * Key Features:
 * - Uses multiple OfferSection components for each offer
 * - Includes a main heading with highlighted text using UnderlineWord and a rounded background span
 * - Responsive text sizes with Tailwind
 * - Provides visual separation and hover effects via OfferSection
 * - Fully reusable structure: new offers can be added simply by adding another Offer
 */


function Offers() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-gerbil leading-[1.3]  md:leading-[1.2] pb-10">
        What we{" "}
        <span className="relative inline-block bg-[#D7EEDD] px-4 py-1 rounded-full">
          can{" "}
        </span>{" "}
        <br />
        <UnderlineWord img={yellowUnderline}>offer </UnderlineWord> you!
      </h1>

      <section>
        <OfferSection
          smallText="Office of multiple interest content"
          bigText="Colaborative & partnership"
        />

        <OfferSection
          smallText="The hanger US Air force digital experimental"
          bigText="We talk about our weight"
        />

        <OfferSection
          smallText="Delta faucet content, social, digital"
          bigText="Plotting Digital confidence"
        />
      </section>
    </div>
  );
}

export default Offers;
