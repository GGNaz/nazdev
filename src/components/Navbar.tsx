import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className=" py-3 px-5 absolute top-0 left-0 z-50 w-full">
      <div className="flex flex-row justify-between text-white">
        <div className="flex gap-3 text-xl">
          <a
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
          </a>
        </div>
        <div>
          <button
            className="flex gap-2 items-center  text-xl"
            onClick={() => navigate("/contact")}
          >
            <FaRegEnvelope /> <span className="text-sm">Get in touch</span>
          </button>
        </div>
      </div>
    </div>
  );
}
