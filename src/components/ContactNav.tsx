import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ContactNav() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className=" bottom-5 right-5 fixed animate__animated animate__fadeInUp">
      <button
        className="p-2 font-bold flex flex-row gap-2 hover:bg-customLightgray hover:text-customWhite bg-customWhite dark:bg-customBlack/80 justify-center items-center border text-xs dark:border-dirtyWhite border-customBlack text-customGray dark:text-customWhite"
        onClick={() => navigate("/contact")}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <FaEnvelope size={25} /> {isHover && <span>CONTACT ME</span>}
      </button>
    </div>
  );
}
