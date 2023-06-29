import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import { FaSuitcase } from "@react-icons/all-files/fa/FaSuitcase";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import xypher from "../assets/Images/xypher.png";
import philmech from "../assets/Images/philmech.png";
import { useState, useEffect } from "react";
import ContactNav from "../components/ContactNav";
export default function ExperiencePage() {
  const navigate = useNavigate();

  type ExperienceProps = {
    _id: number | undefined;
    position: string;
    date: string;
    desc: string;
    icon: JSX.Element;
    image: string;
    link: string;
    delay: number;
    isExpand: boolean;
  };

  const [experienceList, setExperience] = useState<ExperienceProps[]>([]);
  console.log(
    "🚀 ~ file: ExperiencePage.tsx:25 ~ ExperiencePage ~ experienceList:",
    experienceList
  );
  const experience = [
    {
      _id: 1,
      position: "Junior Developer",
      date: "October 09, 2021 - Present",
      desc: "As a junior developer at Xypher Solution Inc , I am proud of my skills and knowledge in various areas of web development. I have experience in API integration, which has allowed me to seamlessly connect my projects with external data sources. I also have a strong understanding of layout and design principles, which enables me to create visually appealing and user-friendly interfaces. In addition to these skills, I have a comprehensive knowledge of NPM packages and their various functions. This knowledge has proved invaluable in streamlining my workflows and making my development process more efficient. Another area I excel in is integrating Google Maps into my projects. I have experience using the Google Maps API to display maps and markers. Overall, my skills and knowledge have allowed me to be a productive and effective junior developer.",
      icon: <FaSuitcase size={25} />,
      image: xypher,
      link: "https://xyphersolutionsinc.com/",
      delay: 0.5,
      isExpand: false,
    },
    {
      _id: 2,
      position: "Web Developer (Internship)",
      date: "Feb 2019 - May 2019",
      desc: "As a web developer at Philippine Center for Postharvest Development and Mechanization (PhilMech), I have acquired skills in layout design, specifically for kiosk machines and personal data sheets (PDS) using Bootstrap grid system. Additionally, I have also designed several login pages and certificates, taking into consideration the user interface and experience. The use of Bootstrap grid allowed me to create a responsive and structured layout, ensuring that the PDS and other pages are displayed correctly on various screen sizes. These skills have greatly enhanced my overall web development abilities and have allowed me to create visually appealing and functional web pages.",
      icon: <FaCode size={25} />,
      image: philmech,
      link: "https://www.philmech.gov.ph/",
      delay: 0.8,
      isExpand: false,
    },
  ];

  useEffect(() => {
    setExperience(experience);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function seeMoreFunction(data: ExperienceProps) {
    const copyList: ExperienceProps[] = [...experienceList];
    console.log(
      "🚀 ~ file: ExperiencePage.tsx:56 ~ seeMoreFunction ~ copyList:",
      copyList
    );
    const findIndexList = experience.findIndex(({ _id }) => _id == data._id);

    if (findIndexList >= 0) {
      copyList[findIndexList].isExpand = !copyList[findIndexList].isExpand;
      setExperience(copyList);
    }
  }

  return (
    <div className="flex justify-center bg-customWhite dark:bg-customBlack pb-5">
      <div className="flex flex-col gap-5 max-w-5xl w-full p-5">
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
            <div className="font-outline-2 text-5xl md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black ">
              EXPERIENCE
            </div>
            <div className="text-customBlack font-bold dark:text-customLightgray  text-md md:text-xl lg:text-2xl absolute bottom-0">
              EXPERIENCE
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {experienceList?.length > 0 &&
              experienceList?.map((data) => {
                const {
                  _id,
                  position,
                  date,
                  desc,
                  icon,
                  image,
                  link,
                  delay,
                  isExpand,
                } = data ?? {};
                return (
                  <ScrollAnimation
                    animateTo={{ y: 0 }}
                    animateFrom={{ y: 70 }}
                    delay={delay}
                    key={_id}
                  >
                    <div className="flex flex-row gap-5">
                      <div className=" flex md:basis-2/3">
                        <div className="flex flex-col gap-7">
                          <div className="flex flex-row gap-2  items-center">
                            <div className="p-3 rounded-none md:rounded-full text-customGray border-0 md:border-2 md:border-customGray dark:text-dirtyWhite bg-dirtyWhite/70 md:dark:bg-customGray w-fit">
                              <div className="md:flex hidden">{icon}</div>{" "}
                              <div className="md:hidden w-16 h-10 flex justify-center">
                                <img
                                  className=" w-fit h-full"
                                  src={image}
                                  alt={link}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col ">
                              <div className="text-customBlack dark:text-dirtyWhite text-lg font-semibold">
                                {position}
                              </div>
                              <div className="text-customLightgray">{date}</div>
                            </div>
                          </div>

                          <div className="ml-0 md:ml-5 p-0 md:pl-8 border-l-customGray border-l-0 md:border-l-2">
                            <div className="text-customGray dark:text-dirtyWhite/70 text-justify">
                              {isExpand ? desc : desc.slice(0, 300)}{" "}
                              <button
                                onClick={() => seeMoreFunction(data)}
                                className="text-customGray/60"
                              >
                                {" "}
                                ...{isExpand ? "see less" : "see more"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/3 border border-customGray dark:border-dirtyWhite/80 justify-center items-center hidden md:flex bg-dirtyWhite/80">
                        <div className="p-5 ">
                          <img src={image} alt={link} />
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
          </div>
        </div>
      </div>
      <ContactNav />
    </div>
  );
}
