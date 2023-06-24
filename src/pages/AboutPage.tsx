import profile from "../assets/Images/profile.jpg";
import ScrollAnimation from "../components/ScrollAnimation";
export default function AboutPage() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-10 max-w-5xl w-full pt-5  ">
        <div className="flex flex-col relative animate__animated animate__backInLeft">
          <div className="font-outline-2 text-8xl text-customBlack font-black ">
            ABOUT ME
          </div>
          <div className="text-customLightgray text-2xl absolute bottom-0">
            ABOUT ME
          </div>
        </div>
        <ScrollAnimation
          animateTo={{ y: 0 }}
          animateFrom={{ y: 50 }}
          delay={0.5}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img src={profile} className="h-[60vh] rounded-lg " alt="profile" />

            <div className="flex flex-col gap-5">
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.7}
              >
                <div className="text-4xl font-bold text-dirtyWhite/90">
                  Nazer Somera
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.9}
              >
                <div className="text-customLightgray flex flex-col gap-2 text-justify text-xl">
                  <div>
                    Hello! I'm Naz, a highly skilled and innovative front-end
                    developer with a passion for creating immersive and
                    user-friendly digital experiences.{" "}
                  </div>

                  <div>
                    With 2(two) years of experience in the field, I bring a
                    strong technical expertise and a proven track record of
                    delivering high-quality solutions to meet and exceed client
                    expectations.{" "}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
