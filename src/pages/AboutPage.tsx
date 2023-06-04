import React from "react";
import { FaLongArrowAltLeft } from "@react-icons/all-files/fa/FaLongArrowAltLeft";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* <div className="flex "> */}
      <div className="w-full h-[40vh] bg-customBlack font-outline-2 text-9xl font-extrabold relative">
        <img
          src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bgimage"
          className="bg-cover h-screen w-full "
        />
        <span className="absolute -bottom-10 left-5 text-customBlack">
          About me
        </span>
      </div>
      {/* </div> */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-6xl w-full border h-screen bg-slate-100">
          {/* <button className="flex flex-row gap-2 items-center">
            <FaLongArrowAltLeft /> <span>Back to Main</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
