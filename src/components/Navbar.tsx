import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className=" py-3 px-5 absolute top-0 left-0 z-50 w-full">
      <div className="flex flex-row justify-between ">
        <div className="flex gap-3 text-xl">
          <div className="px-2 border border-dirtyWhite flex items-center">
            <div className="text-dirtyWhite text-md">N</div>
          </div>
          {/* <a
            href="https://www.linkedin.com/in/nazer-somera-b7b598223/"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/GGNaz"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub />{" "}
          </a> */}
        </div>
        <div className="flex flex-row gap-2">
          <a
            href="https://github.com/GGNaz"
            target="blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center text-white hover:bg-customGray/50   text-xl border p-2">
              <FaGithub />
            </div>
          </a>
          <div className="flex gap-2 items-center text-white hover:bg-customGray/50   text-xl border p-2">
            <FaMoon />
          </div>
          <button
            className="flex gap-2 items-center text-white hover:bg-customGray/50   text-xl border p-2"
            onClick={() => navigate("/contact")}
          >
            <span className="text-xs">CONTACT ME</span>
          </button>
        </div>
      </div>
    </div>
  );
}
