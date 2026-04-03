import React from "react";

/***
 * FeatureSection Component
 * -----------------------
 * This is a **reusable section component** used to display a feature or team info.
 * It is designed to be flexible and visually match the Figma design.
 * 
 * Props:
 * - image: The main image to display (usually team member or illustration)
 * - titleBefore: Text appearing before the highlighted word
 * - titleHighlight: Key word/phrase highlighted with green background color
 * - titleAfter: Text appearing after the highlighted word
 * - description: Paragraph describing the feature
 * - reverse: Boolean; if true, swaps image and text positions for layout variety
 * - decorType: Type of decorative SVG to use ('square' or 'triangles')
 * - square, triangle: Decorative SVGs passed as props
 * 
 * Key Features:
 * - Responsive layout: flex adjusts direction on reverse prop
 * - Reusable: can be used multiple times with different content
 * - Decorative SVGs positioned behind or near images
 * - Includes a "Read more" button with hover color + scale effect
 * - Text highlights key phrases with rounded background spans
 */




function FeatureSection({
  image,
  titleBefore,
  titleHighlight,
  titleAfter,
  description,
  reverse,
  decorType,
  square,
  triangle,
}) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Red blurred background shape
      <div className="absolute w-[500px] h-[500px] bg-red-400/40 blur-[120px] rounded-full -top-40 -right-20"></div> */}

      <div
        className={`max-w-7xl mx-auto flex items-center gap-10 px-6 
        ${reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* Image */}
        <div className="relative">
          {decorType === "square" && (
            <img
              src={square}
              alt=""
              className="absolute -z-10 -right-6 w-15 md:w-30 lg:w-40"
            />
          )}

          {decorType === "triangles" && (
            <img
              src={triangle}
              alt=""
              className="absolute -top-4  w-15 md:w-32 lg:w-40 -z-10"
            />
          )}

          <img
            src={image}
            alt="team"
            className="w-[360px] sm:w-[360px] md:w-[380px] lg:w-[400px] rounded-full object-cover"
          />

          {decorType === "triangles" && (
            <img
              src={triangle}
              alt=""
              className="absolute right-1 md:right-6  -bottom-6 w-15 md:w-32 lg:w-40 z-10"
            />
          )}
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-4xl font-gerbil leading-tight">
            {titleBefore}

            <span className="bg-[#D7EEDD] px-3 py-1 rounded-full">
              {titleHighlight}
            </span>

            {titleAfter}
          </h2>

          <p className="mt-6 font-satoshi leading-relaxed">{description}</p>

          <button className="mt-8 flex items-center gap-3 text-sm font-medium hover-scale-color">
            Read more →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
