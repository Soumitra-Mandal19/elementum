import React from "react";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.svg";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.svg";
import profile7 from "../assets/profile7.png";
import profile8 from "../assets/profile8.svg";

function Avatars() {
const avatars = [
    { src: profile1, left: "10%", top: "40%" },
    { src: profile2, left: "20%", top: "25%" },
    { src: profile3, left: "35%", top: "10%" },
    { src: profile4, left: "45%", top: "35%" },
    { src: profile5, left: "60%", top: "10%" },
    { src: profile6, left: "69%", top: "30%" },
    { src: profile7, left: "83%", top: "0%" },
    { src: profile8, left: "90%", top: "40%" }
  ];

  return (
    <section className="py-6">
      <div className="relative w-full h-[260px]">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.src}
            alt="avatar"
            
            style={{
              left: avatar.left,
              top: avatar.top,
              transform: "translate(-50%, -50%)"
            }}
            className={`absolute
                               
                                rounded-full  
                                object-cover
                                 w-[70px] h-[70px]
                                 sm:w-[100px] sm:h-[100px]
                                md:w-[150px] md:h-[150px]
                                 lg:w-[226px] lg:h-[226px]
                                shadow-md                    
                        
                                `}
          />
        ))}
      </div>
    </section>
  );
}

export default Avatars;
