import React from "react";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
export default function Navbar() {
  return (
    <div className="bg-customBlack py-3 px-5 absolute top-0 left-0 z-10 w-full">
      <div className="flex flex-row justify-between text-white">
        <div className="flex gap-3">
          <button>
            {" "}
            <FaLinkedinIn />
          </button>
          <button>
            {" "}
            <FaGithub />{" "}
          </button>
        </div>
        <div>
          <button className="flex gap-2 items-center">
            <FaRegEnvelope /> <span className="text-sm">Get in touch</span>
          </button>
        </div>
      </div>
    </div>
  );
}
