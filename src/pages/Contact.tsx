import { useNavigate } from "react-router-dom";

import ScrollAnimation from "../components/ScrollAnimation";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-customBlack pb-5">
      <div className="flex flex-col gap-5 max-w-5xl w-full pt-5  ">
        <div>
          <button
            className="flex flex-row gap-2  text-customLightgray items-center"
            onClick={() => navigate("/")}
          >
            <RiArrowLeftLine /> Back
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative animate__animated animate__backInLeft">
            <div className="font-outline-2 text-8xl text-customBlack font-black ">
              CONTACT ME
            </div>
            <div className="text-dirtyWhite/80 text-2xl absolute bottom-0">
              CONTACT ME
            </div>
          </div>
          <div className="grid grid-rows-1 max-w-3xl">
            <div className="grid grid-cols-2 gap-5">
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.5}
              >
                <div className="flex flex-col">
                  <div className="text-dirtyWhite/80 text-xs">First name</div>
                  <input
                    type="text"
                    className="h-10 px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.5}
              >
                <div className="flex flex-col">
                  <div className="text-dirtyWhite/80 text-xs">Last name</div>
                  <input
                    type="text"
                    className="h-10 px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent"
                  />
                </div>
              </ScrollAnimation>

              <div className="flex flex-col col-span-2">
                <ScrollAnimation
                  animateTo={{ y: 0 }}
                  animateFrom={{ y: 50 }}
                  delay={0.7}
                >
                  <div className="flex flex-col col-span-2">
                    <div className="text-dirtyWhite/80 text-xs">Email</div>
                    <input
                      type="text"
                      className="h-10 px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="flex flex-col col-span-2">
                <ScrollAnimation
                  animateTo={{ y: 0 }}
                  animateFrom={{ y: 50 }}
                  delay={0.9}
                >
                  <div className="flex flex-col col-span-2">
                    <div className="text-dirtyWhite/80 text-xs">Message</div>
                    <textarea
                      cols={30}
                      className="h-10 px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent"
                    />
                  </div>
                </ScrollAnimation>
              </div>
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={1.1}
              >
                <div className="flex flex-col col-span-1 bg-customGray py-2">
                  <button className="text-dirtyWhite/50 text-md">
                    Send message
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
