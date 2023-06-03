import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import picture from "../assets/nazer.png";
import apple from "../assets/icons/apple.png";
import netflix from "../assets/icons/netflix.png";
import snakeandladder from "../assets/icons/snakeandladder.png";
import ScrollAnimation from "../components/ScrollAnimation";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import Navbar from "../components/Navbar";
export default function LandingPage() {
  const navigate = useNavigate();

  const [mouseClick, setMouseClick] = useState("");

  const aboutContent = () => {
    return (
      <div className="absolute right-0 bottom-0">
        <div className="relative">
          <img src={picture} alt="picture" className="h-[80vh]" />
        </div>
      </div>
    );
  };

  const showAnimate = (route: string) => {
    setMouseClick(route);
    setTimeout(() => navigate(route), 500);
  };

  return (
    <div className="flex flex-row overflow-hidden">
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80"
        alt="bgimage"
        className="bg-cover h-screen w-full absolute top-0 left-0 blur-sm"
      />
      <div className="h-screen w-full z-20 bg-gradient-to-tr from-black via-black/80 to-black/5 absolute top-0 " />

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
              } text-9xl text-customGray font-extrabold hover:text-white cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-90`}
              onClick={() => showAnimate("about")}
            >
              About
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
              } text-9xl text-customGray font-extrabold hover:text-white cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-90`}
              // onMouseEnter={() => setMouseHover("Projects")}
              // onMouseLeave={() => setMouseHover("")}
            >
              Projects
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
              } text-9xl text-customGray font-extrabold hover:text-white cursor-pointer w-fit transition delay-150 duration-300 ease-in-out hover:scale-90`}
            >
              Experience
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="basis-2/6 flex justify-center items-center">
        {/* {mouseHover !== "" && <>{showIcons()}</>} */}
        <FaCode className="h-[40vh] w-[40vw] text-customGray" />
      </div>
    </div>
  );
}
