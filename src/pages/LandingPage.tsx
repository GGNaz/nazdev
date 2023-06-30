import {  useState } from "react";
import { useNavigate } from "react-router-dom";

import ScrollAnimation from "../components/ScrollAnimation";
import moon from "../assets/Images/moon.png";
import sun from "../assets/Images/sun.png";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
export default function LandingPage() {
  const navigate = useNavigate();

  const [mouseClick, setMouseClick] = useState("");
  const [getTheme, setGetTheme] = useState("light");
  console.log(
    "🚀 ~ file: LandingPage.tsx:14 ~ LandingPage ~ getTheme:",
    getTheme
  );

  const showAnimate = (route: string) => {
    setMouseClick(route);
    setTimeout(() => navigate(route), 500);
  };

  return (
    <div className="flex relative flex-row overflow-hidden bg-dirtyWhite dark:bg-customBlack">
      <Navbar setGetTheme={setGetTheme} />
      <div className="absolute flex md:hidden -top-32 -right-60">
        <img
          src={getTheme !== "light" ? sun : moon}
          alt="moon"
          // className={` h-[50vh]`}
        />
      </div>
      <div className="flex  md:justify-normal justify-center items-start md:items-center w-full md:basis-4/6 z-30">
        <div className="flex flex-col gap-2 px-5 h-screen justify-center items-center md:items-start relative">
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.5}
          >
            <div
              className={`${
                mouseClick === "about"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }   font-extrabold  cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-90`}
              onClick={() => showAnimate("about")}
            >
              <div className="font-outline-2 hover:text-customGray dark:hover:text-customGray text-5xl md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black ">
                ABOUT
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.7}
          >
            <div
              onClick={() => showAnimate("project")}
              className={`${
                mouseClick === "project"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-90`}
            >
              <div className="font-outline-2 hover:text-customGray dark:hover:text-customGray text-5xl md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black ">
                PROJECT
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.9}
          >
            <div
              onClick={() => showAnimate("experience")}
              className={`${
                mouseClick === "experience"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }  cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-90`}
            >
              <div className="font-outline-2 hover:text-customGray dark:hover:text-customGray  text-5xl md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black ">
                EXPERIENCE
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="hidden md:basis-2/6 md:flex justify-center items-center">
        <Tech />
      </div>
    </div>
  );
}
