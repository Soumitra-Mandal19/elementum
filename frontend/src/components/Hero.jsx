import React from "react";
import pinkRectangle from "../assets/pink_rectangle.svg";
import violetEllipse from "../assets/violet_ellipse.svg";
import redCurlLine from "../assets/redCurl_line.svg";
import blackCurlLine from "../assets/blackCurl_line.svg";
import yellowUnderline from "../assets/yellow_underline.svg";
import UnderlineWord from "./UnderlineWord";

/***
 * Hero Component
 * ----------------
 * This component renders the hero section of the webpage, usually the first
 * visible section on page load.
 * 
 * Key Features:
 * - Text and heading layout based on the provided Figma design.
 * - Uses SVG decorations (pink rectangle, violet ellipse, red & black curl lines)
 *   for stylistic background elements.
 * - Highlights certain words with UnderlineWord component (yellow underline effect).
 * - Responsive design using Tailwind classes (text sizes, spacing, and positioning).
 * - Inline elements like colored backgrounds or shapes emphasize key phrases.
 * - Fully static content; purely visual and informational.
 */

function Hero() {
  return (
    <section className="text-center py-20 relative">
      <img
        src={redCurlLine}
        className="absolute top-72 md:top-62  h-40 md:h-50"
        alt=""
      />
      <img
        src={blackCurlLine}
        className="absolute top-72 md:top-62 left-6 h-40 md:h-50"
        alt=""
      />

      <h1 className="text-4xl md:text-6xl font-gerbil leading-[1.3]  md:leading-[1.2]">
        The <UnderlineWord img={yellowUnderline}>thinkers</UnderlineWord> and{" "}
        <br />
        doers were{" "}
        <span className="relative inline-block">
          <img
            src={pinkRectangle}
            className="absolute -right-12.5 top-0 w-full h-full  -z-10 pointer-events-none"
          />
          changing
        </span>{" "}
        <br />
        the{" "}
        <span className="relative inline-block bg-[#D7EEDD] px-4 py-1 rounded-full">
          status
        </span>{" "}
        Quo{" "}
        <span className="relative inline-block">
          <img
            src={violetEllipse}
            className="absolute w-16 h-16 md:w-20 md:h-20 -right-20 bottom-0 md:-right-20 max-w-20 md:max-w-30 -z-10"
          />
          with
        </span>
      </h1>

      <p className="mt-6 max-w-xl mx-auto">
        We are a team of strategists, designers, communicators, researchers.
        Together, we believe that progress only happens when you refuse to play
        things safe.
      </p>
    </section>
  );
}

export default Hero;
