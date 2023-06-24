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
    <div className="flex flex-row overflow-hidden bg-customBlack">
      <Navbar />

      <div className="basis-4/6 z-30">
        <div className="flex flex-col gap-2 px-5 h-screen justify-center relative">
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
              <div className="font-outline-2 hover:text-customGray text-8xl text-customBlack font-black ">
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
              <div className="font-outline-2 hover:text-customGray text-8xl text-customBlack font-black ">
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
              <div className="font-outline-2 hover:text-customGray text-8xl text-customBlack font-black ">
                EXPERIENCE
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="basis-2/6 flex justify-center items-center">
        <Tech />
      </div>
    </div>
  );
}
