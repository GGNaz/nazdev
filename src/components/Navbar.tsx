import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import * as BSIcon from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<string>("light");

  const changeTheme = (theme: string) => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // localStorage.removeItem("theme");
    // localStorage.clear();

    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className=" p-5 absolute top-0 right-0 z-50 w-full">
      <div className="flex flex-row justify-between  dark:text-dirtyWhite text-customBlack">
        <div className="flex gap-3 text-xl ">
          <div className="px-2 border border-customBlack dark:border-dirtyWhite flex items-center cursor-pointer">
            <div className=" text-md font-medium">N</div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <a
            href="https://github.com/GGNaz"
            target="blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center hover:text-white hover:bg-customGray/50  border-customBlack dark:border-dirtyWhite text-xl border p-2">
              <FaGithub />
            </div>
          </a>
          <div
            className="flex gap-2 items-center hover:text-white hover:bg-customGray/50 cursor-pointer border-customBlack dark:border-dirtyWhite text-xl border p-2"
            onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <BSIcon.BsMoonFill />
            ) : (
              <BSIcon.BsBrightnessHigh />
            )}
          </div>
          {/* <button
            className="flex gap-2 items-center justify-center hover:text-white hover:bg-customGray/50  border-customBlack dark:border-dirtyWhite text-xl border p-2"
            onClick={() => navigate("/contact")}
          >
            <span className="text-xs font-medium">CONTACT ME</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
