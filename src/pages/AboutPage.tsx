import profile from "../assets/Images/profile2.jpg";
import ScrollAnimation from "../components/ScrollAnimation";

import ContactNav from "../components/ContactNav";
import BackBtn from "../components/BackBtn";

export default function AboutPage() {
  return (
    <div className="flex justify-center bg-customWhite dark:bg-customBlack py-10">
      <div className="flex flex-col gap-5 max-w-5xl w-full p-5">
        <div className="fixed z-50 left-0 top-3">
          <BackBtn />
        </div>
        <div className="flex flex-col relative animate__animated animate__backInRight">
          <div className="font-outline-2 text-5xl  md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black ">
            ABOUT ME
          </div>
          <div className="text-customBlack font-bold dark:text-customLightgray text-md md:text-xl lg:text-2xl absolute bottom-0">
            ABOUT ME
          </div>
        </div>
        {/* <ScrollAnimation
          animateTo={{ y: 0 }}
          animateFrom={{ y: 50 }}
          delay={0.2}
        > */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch md:items-center p-5">
          <img
            src={profile}
            className="max-h-full md:max-h-96 "
            alt="profile"
          />

          <div className="flex flex-col gap-5">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.3}
            >
              <div className="text-2xl md:text-4xl font-bold text-customBlack dark:text-dirtyWhite/90">
                Nazer Somera
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.4}
            >
              <div className="text-customGray dark:text-customLightgray flex flex-col gap-2 text-justify text-md md:text-lg">
                Hi! I'm Naz, a passionate and innovative front-end developer
                with 3+ years of experience crafting immersive, user-friendly
                digital experiences. I specialize in translating ideas into
                seamless, interactive interfaces, combining technical expertise
                with a creative mindset to deliver exceptional results. My
                dedication to exceeding client expectations is reflected in a
                proven track record of high-quality solutions that drive user
                engagement and satisfaction.
              </div>
            </ScrollAnimation>
          </div>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      <ContactNav />
    </div>
  );
}
