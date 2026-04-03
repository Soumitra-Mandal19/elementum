import React from "react";
import yellowUnderline from "../assets/yellow_underline.svg";
import UnderlineWord from "./UnderlineWord";
import comma from "../assets/comma.png";
import comma1 from "../assets/comma1.png";

import profile9 from "../assets/profile9.png";
import profile10 from "../assets/profile10.png";
import profile11 from "../assets/profile11.png";
import profile12 from "../assets/profile12.png";
import profile13 from "../assets/profile13.png";
import profile14 from "../assets/profile14.png";
import profile2 from "../assets/profile2.png";
import profile4 from "../assets/profile4.png";


/***
 * Feedback Component
 * -----------------
 * This component renders the customer feedback/testimonials section.
 * 
 * Key Features:
 * - Displays multiple decorative avatar images positioned around the section (left and right sides)
 * - Responsive avatar sizes for mobile, tablet, and desktop
 * - Central content area with heading and testimonial card
 * - Heading includes highlighted words using UnderlineWord and rounded background spans
 * - Testimonial card includes opening and closing comma SVGs for stylistic effect
 * - Used to showcase client/customer feedback in an engaging layout
 */

function Feedback() {
  return (
    <section className="relative py-24 my-20 overflow-hidden">
      {/* LEFT SIDE AVATARS */}

      <img
        src={profile9}
        alt=""
        className="absolute left-[6%] top-[20%] hidden md:block
        w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px]
        rounded-full object-cover shadow-md"
      />

      <img
        src={profile10}
        alt=""
        className="absolute left-[3%] top-[45%] 
        w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px]
        rounded-full object-cover shadow-md"
      />

      <img
        src={profile11}
        alt=""
        className="absolute left-[3%] bottom-[5%] hidden md:block
        w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[160px] lg:h-[160px]
        rounded-full object-cover shadow-md"
      />

      <img
        src={profile12}
        alt=""
        className="absolute left-[10%] md:left-[10%] lg:left-[20%] bottom-[20%]  hidden md:block
        w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px]
        rounded-full object-cover shadow-md"
      />

      {/* RIGHT SIDE AVATARS */}

      <img
        src={profile13}
        alt=""
        className="absolute right-[8%] top-[18%] hidden md:block
        w-[70px] h-[70px] md:w-[90px] md:h-[90px] 
        rounded-full object-cover shadow-md"
      />

      <img
        src={profile4}
        alt=""
        className="absolute right-[18%] top-[40%] hidden md:block
        w-[40px] h-[40px] md:w-[60px] md:h-[60px] 
        rounded-full object-cover shadow-md"
      />

      <img
        src={profile2}
        alt=""
        className="absolute right-[4%] bottom-[40%] 
        w-[60px] h-[60px] md:w-[100px] md:h-[100px] 
        rounded-full object-cover shadow-md"
      />

      <img
        src={profile14}
        alt=""
        className="absolute right-[8%] bottom-[2%] md:right-[15%] hidden md:block
         w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px]
        rounded-full object-cover shadow-md"
      />
      {/* CENTER CONTENT */}

      <div className="max-w-[650px] mx-auto px-10 md:px-20 text-center relative z-10">
        <h3 className="font-gerbil text-2xl md:text-4xl mb-12">
          <span className="bg-[#D7EEDD] px-4 py-1 rounded-full">What</span> our
          customer <br />
          says <UnderlineWord img={yellowUnderline}>About Us</UnderlineWord>
        </h3>

        {/* Testimonial card */}

        <div className="bg-[#D7EEDD]/30 relative rounded-[60px] w-full max-w-[300px] mx-auto px-10 py-10 font-satoshi">
          <img
            className="absolute left-5 top-[20px]  w-[30px]"
            src={comma}
            alt=""
          />

          <p className="leading-relaxed">
            Elementum delivered the site within the timeline as requested. In
            the end, the client found a 50% increase in traffic within days
            since its launch. They also demonstrated an impressive ability to
            use technologies the company hadn’t used before.
            <img
              className="absolute right-4 bottom-12 w-[30px]"
              src={comma1}
              alt=""
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
