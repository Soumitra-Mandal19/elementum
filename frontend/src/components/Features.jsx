import FeatureSection from "./FeatureSection";

import img1 from "../assets/sectionImg1.png";
import img2 from "../assets/sectionImg2.png";
import squareImg from "../assets/square.png";
import triangleImg from "../assets/triangle.png";
import yellowUnderline from "../assets/yellow_underline.svg";
import UnderlineWord from "./UnderlineWord";


/***
 * Features Component
 * -----------------
 * This component renders multiple FeatureSection components to showcase
 * the company's features, philosophy, or team highlights.
 *
 * Key Features:
 * - Uses FeatureSection (reusable component) to display each section
 * - Passes different props to each FeatureSection:
 *    - image, decorative shapes (square or triangle)
 *    - titleBefore, titleHighlight, titleAfter (with UnderlineWord for highlighting)
 *    - description
 *    - reverse layout for alternating sections
 * - Integrates UnderlineWord component for underlined text highlights
 * - Fully responsive and matches Figma design
 * - Allows content variations without modifying the FeatureSection component
 */

export default function Features() {
  return (
    <div className="relative">
      <FeatureSection
        image={img2}
        square={squareImg}
        decorType="square"
        titleBefore={
          <>
            <UnderlineWord img={yellowUnderline}>Tomorow</UnderlineWord>
            <span> should be better than</span>
          </>
        }
        titleHighlight="today"
        titleAfter=""
        description="We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
        reverse
      />

      <FeatureSection
        image={img1}
        triangle={triangleImg}
        decorType="triangles"
        titleBefore=""
        titleHighlight="See"
        titleAfter={
          <>
            <span>how we can help you </span>
            <UnderlineWord img={yellowUnderline}>progress</UnderlineWord>
          </>
        }
        description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research."
      />
    </div>
  );
}
