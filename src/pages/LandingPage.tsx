import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ScrollAnimation from "../components/ScrollAnimation";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
export default function LandingPage() {
  const navigate = useNavigate();

  const [mouseClick, setMouseClick] = useState("");

  const showAnimate = (route: string) => {
    setMouseClick(route);
    setTimeout(() => navigate(route), 500);
  };

  return (
    <div className="flex relative flex-row overflow-hidden bg-dirtyWhite dark:bg-customBlack">
      <Navbar />
      {/* md:basis-4/6 */}
      <div className=" md:basis-2/4 flex  md:justify-normal justify-center  items-start md:items-center w-full  z-30">
        <div className="text-4xl sm:text-7xl  scrollbar overflow-y-auto flex flex-col justify-center  p-5 md:p-10 h-screen gap-2 w-full ">
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.2}
          >
            <div
              className={`${
                mouseClick === "about"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }   font-extrabold  cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-105`}
              onClick={() => showAnimate("about")}
            >
              <div className=" font-outline-2 text-dirtyWhite  hover:text-customBlack/90 dark:text-customGray dark:hover:text-customWhite/80   dark:font-outline-2 font-black ">
                ABOUT
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.3}
          >
            <div
              onClick={() => showAnimate("project")}
              className={`${
                mouseClick === "project"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }  font-extrabold  cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-105`}
            >
              <div className=" font-outline-2 text-dirtyWhite  hover:text-customBlack/90 dark:text-customGray dark:hover:text-customWhite/80   dark:font-outline-2 font-black ">
                PROJECT
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.4}
          >
            <div
              onClick={() => showAnimate("experience")}
              className={`${
                mouseClick === "experience"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }  font-extrabold  cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-105`}
            >
              {/* <div className="font-outline-2 hover:text-customGray dark:hover:text-customGray  text-5xl md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black "> */}
              <div className=" font-outline-2 text-dirtyWhite  hover:text-customBlack/90 dark:text-customGray dark:hover:text-customWhite/80   dark:font-outline-2 font-black ">
                EXPERIENCE
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.5}
          >
            <div
              className={`${
                mouseClick === "contact"
                  ? "animate__animated animate__bounceOutLeft"
                  : ""
              }   font-extrabold  cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-105`}
              onClick={() => showAnimate("contact")}
            >
              <div className=" font-outline-2 text-dirtyWhite  hover:text-customBlack/90 dark:text-customGray dark:hover:text-customWhite/80   dark:font-outline-2 font-black ">
                CONTACT ME
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="hidden md:basis-2/4 md:flex justify-center items-center">
        <Tech />
      </div>
    </div>
  );
}
