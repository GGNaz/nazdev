import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import picture from "../assets/nazer.png";
import apple from "../assets/icons/apple.png";
import netflix from "../assets/icons/netflix.png";
import snakeandladder from "../assets/icons/snakeandladder.png";
import ScrollAnimation from "../components/ScrollAnimation";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaGamepad } from "@react-icons/all-files/fa/FaGamepad";
export default function LandingPage() {
  const navigate = useNavigate();

  const [mouseHover, setMouseHover] = useState("");

  console.log(
    "🚀 ~ file: LandingPage.tsx:8 ~ LandingPage ~ mouseHover:",
    mouseHover
  );

  const aboutContent = () => {
    return (
      <div className="absolute right-0 bottom-0">
        <div className="relative">
          <img src={picture} alt="picture" className="h-[80vh]" />
        </div>
      </div>
    );
  };

  const projectsContent = () => {
    return (
      <div className="absolute bottom-10 right-5">
        <div className="relative">
          <img
            src={snakeandladder}
            alt="snakeandladder"
            className="shadow-lg w-[40vw] "
          />
          <div className="absolute -top-5 -left-5">
            <img src={apple} alt="apple" className="shadow-lg w-[40vw] " />
          </div>
          <div className="absolute -top-14 -left-14">
            <img src={netflix} alt="netflix" className="shadow-lg w-[40vw] " />
          </div>
        </div>
      </div>
    );
  };

  const showIcons = () => {
    switch (mouseHover) {
      case "About":
        return aboutContent();
      case "Projects":
        return projectsContent();
      case "Experience":
        return aboutContent();
    }
  };

  return (
    <div className="flex flex-row">
      <div className="basis-4/6 z-30">
        <div className="flex flex-col gap-2 p-5 h-screen justify-center relative">
          <ScrollAnimation
            animateTo={{ x: 0 }}
            animateFrom={{ x: 75 }}
            delay={0.5}
          >
            <div
              className="text-9xl text-customGray font-extrabold hover:text-white cursor-pointer w-fit"
              onMouseEnter={() => setMouseHover("About")}
              onMouseLeave={() => setMouseHover("")}
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
              className="text-9xl text-customGray font-extrabold hover:text-white cursor-pointer w-fit"
              onMouseEnter={() => setMouseHover("Projects")}
              onMouseLeave={() => setMouseHover("")}
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
              className="text-9xl text-customGray font-extrabold hover:text-white cursor-pointer w-fit"
              onMouseEnter={() => setMouseHover("Experience")}
              onMouseLeave={() => setMouseHover("")}
            >
              Experience
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="basis-2/6">{mouseHover !== "" && <>{showIcons()}</>}</div>
    </div>
  );
}
