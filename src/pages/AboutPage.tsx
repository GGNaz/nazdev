import { useNavigate } from "react-router-dom";
import profile from "../assets/Images/profile.jpg";
import ScrollAnimation from "../components/ScrollAnimation";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import { RiGamepadLine } from "@react-icons/all-files/Ri/RiGamepadLine";
import { RiYoutubeLine } from "@react-icons/all-files/Ri/RiYoutubeLine";
import { RiRidingLine } from "@react-icons/all-files/Ri/RiRidingLine";
import { RiMusic2Line } from "@react-icons/all-files/Ri/RiMusic2Line";
import { RiCodeSSlashLine } from "@react-icons/all-files/Ri/RiCodeSSlashLine";
export default function AboutPage() {
  const navigate = useNavigate();
  const hobbies = [
    {
      _id: 1,
      icon: <RiGamepadLine size={25} />,
      title: "Playing games",
    },
    {
      _id: 2,
      icon: <RiCodeSSlashLine size={25} />,
      title: "Coding",
    },
    {
      _id: 3,
      icon: <RiRidingLine size={25} />,
      title: "Biking",
    },
    {
      _id: 4,
      icon: <RiMusic2Line size={25} />,
      title: "Listen to music",
    },
    {
      _id: 5,
      icon: <RiYoutubeLine size={25} />,
      title: "Watching anime or movies",
    },
  ];
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-5 max-w-5xl w-full p-5  bg-customBlack">
        <div>
          <button
            className="flex flex-row gap-2  text-customLightgray items-center"
            onClick={() => navigate("/")}
          >
            {" "}
            <RiArrowLeftLine /> Back
          </button>
        </div>
        <div className="flex flex-col relative animate__animated animate__backInLeft">
          <div className="font-outline-2  text-6xl md:text-8xl text-customBlack font-black ">
            ABOUT ME
          </div>
          <div className="text-customLightgray  text-xl md:text-2xl absolute bottom-0">
            ABOUT ME
          </div>
        </div>
        <ScrollAnimation
          animateTo={{ y: 0 }}
          animateFrom={{ y: 50 }}
          delay={0.2}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img src={profile} className="h-[60vh] " alt="profile" />

            <div className="flex flex-col gap-5">
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.3}
              >
                <div className="text-2xl md:text-4xl font-bold text-dirtyWhite/90">
                  Nazer Somera
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.4}
              >
                <div className="text-customLightgray flex flex-col gap-2 text-justify text-md md:text-lg">
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
              <ScrollAnimation
                animateTo={{ y: 0 }}
                animateFrom={{ y: 50 }}
                delay={0.5}
              >
                <div className="flex flex-col gap-1">
                  <div className="text-xl text-dirtyWhite/90">
                    Things I love
                  </div>
                  <div className="flex flex-row gap-3">
                    {hobbies?.map(({ _id, icon, title }) => (
                      <a title={title}    key={_id}>
                        <div
                          className="p-2 bg-customGray text-dirtyWhite "
                       
                        >
                          {icon}
                        </div>
                      </a>
                    ))}
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
