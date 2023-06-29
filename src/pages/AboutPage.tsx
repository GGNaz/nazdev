import { useNavigate } from "react-router-dom";
import profile from "../assets/Images/profile.jpg";
import ScrollAnimation from "../components/ScrollAnimation";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import ContactNav from "../components/ContactNav";

export default function AboutPage() {
  const navigate = useNavigate();
  const hobbies = [
    {
      _id: 1,
      icon: "Playing games",
      title: "Playing games",
    },
    {
      _id: 2,
      icon: "Coding",
      title: "Coding",
    },
    {
      _id: 3,
      icon: "Biking",
      title: "Biking",
    },
    {
      _id: 4,
      icon: "Listen to music",
      title: "Listen to music",
    },
    {
      _id: 5,
      icon: "Watching anime or movies",
      title: "Watching anime or movies",
    },
  ];
  return (
    <div className="flex justify-center bg-customWhite dark:bg-customBlack">
      <div className="flex flex-col gap-5 max-w-5xl w-full p-5 ">
        <div>
          <button
            className="flex flex-row gap-2 text-customBlack dark:text-customLightgray items-center"
            onClick={() => navigate("/")}
          >
            {" "}
            <RiArrowLeftLine /> Back
          </button>
        </div>
        <div className="flex flex-col relative animate__animated animate__backInLeft">
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
                <div>
                  Hello! I'm Naz, a highly skilled and innovative front-end
                  developer with a passion for creating immersive and
                  user-friendly digital experiences.{" "}
                </div>

                <div>
                  With 2(two) years of experience in the field, I bring a strong
                  technical expertise and a proven track record of delivering
                  high-quality solutions to meet and exceed client expectations.{" "}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.5}
            >
              <div className="flex flex-col gap-1">
                <div className="text-xl text-customBlack dark:text-dirtyWhite/90">
                  Things I love
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  {hobbies?.map(({ _id, icon, title }) => (
                    <a title={title} key={_id}>
                      <div className="p-2 bg-customWhite dark:bg-customGray h-full w-full flex flex-col justify-center text-customGray border border-customGray dark:text-dirtyWhite ">
                        <span>{icon}</span>
                      </div>
                    </a>
                  ))}
                </div>
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
