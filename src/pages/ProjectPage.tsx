import { useNavigate } from "react-router-dom";
import netflix from "../assets/projects/netflix.png";
import snakeandladder from "../assets/projects/snakeandladder.png";
import apple from "../assets/projects/apple.png";

import ScrollAnimation from "../components/ScrollAnimation";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import ContactNav from "../components/ContactNav";
export default function ProjectPage() {
  const navigate = useNavigate();

  const projectList = [
    {
      _id: 1,
      title: "Netflix (Movie Trailers)",
      tech: [
        { name: "ReactJS", link: "https://react.dev/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        { name: "TMDB API's", link: "https://www.themoviedb.org/" },
      ],

      desc: "Netflix (Movie Tailers) app is a simplified version of Netflix, offers a vast collection of movies, TV shows, documentaries, and original content across a wide range of genres.",
      func: [
        "Fetch API's",
        "Play movie trailer",
        "Filter or search movies",
        "Shows top, trending, popular movies",
        "View the release date of specific movie",
        "View movie ratings and total votes",
      ],
      delay: 0.2,
      image: netflix,
    },
    {
      _id: 2,
      title: "Snake and Ladder",
      tech: [
        { name: "ReactJS", link: "https://react.dev/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
      ],
      desc: "Snake and Ladder is a board game where players roll dice, move their game pieces, and aim to reach the final square while avoiding snakes that push them backward and utilizing ladders that help them advance quickly. The first player to reach the final square wins.",
      func: [
        "Generates a random number, simulating the roll of a dice",
        "The movement of players' game pieces based on the dice roll",
        "Player can encounter snake, moving backward player position",
        "Player can encounter ladder,  advancing player position",
        "Keeps track of the players' turns",
        "Checks if a player has reached or surpassed the final square, declaring them as the winner and ending the game.",
      ],
      delay: 0.3,
      image: snakeandladder,
    },
    {
      _id: 3,
      title: "Apple Store",
      tech: [
        { name: "ReactJS", link: "https://react.dev/" },
        { name: "Typescript", link: " https://www.typescriptlang.org/" },
        { name: "Material UI (MUI)", link: "https://mui.com/" },
      ],

      desc: "Apple Store is a e-commerce website, unfortunately its in under development, you can visit the website for current status.",
      func: [
        "Show list of iPhones, iPads, MacBook and Airpods",
        "Add to Cart, item name with quantity and color",
        "View the items on the cart",
        "Remove items from the cart",
        "Checkout the items",
        "Shows the breakdown of total payment",
        "View details of specific item",
      ],
      delay: 0.4,
      image: apple,
    },
  ];
  return (
    <div className="flex justify-center bg-customWhite dark:bg-customBlack pb-5">
      <div className="flex flex-col gap-5 max-w-5xl w-full p-5  ">
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
            <div className="font-outline-2  text-5xl  md:text-6xl lg:text-8xl text-customWhite dark:text-customBlack font-black ">
              PROJECTS
            </div>
            <div className="text-customBlack font-bold dark:text-customLightgray text-md md:text-xl lg:text-2xl absolute bottom-0">
              PROJECTS
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {projectList.length > 0 &&
              projectList.map((data) => {
                const { _id, title, desc, func, tech, delay, image } =
                  data ?? {};
                return (
                  <ScrollAnimation
                    animateTo={{ y: 0 }}
                    animateFrom={{ y: 70 }}
                    delay={delay}
                    key={_id}
                  >
                    <div
                      className={`flex flex-col md:${
                        _id % 2 === 0
                          ? "flex-row md:flex-row-reverse"
                          : "flex-row"
                      }  gap-5 bg-zinc-200 dark:bg-customGray/30 p-5`}
                    >
                      <div className="basis-1/2  flex flex-col cursor-pointer bg-customBlack dark:bg-white h-fit">
                        <div className="flex relative">
                          <img src={image} alt={title} className="z-20" />
                          <div className="absolute group/item text-customWhite w-full h-full hover:bg-customBlack/60 z-40">
                            <div className="absolute h-full w-full flex justify-center items-center group/edit invisible  group-hover/item:visible">
                              visit
                            </div>
                          </div>
                        </div>
                       
                        <div className="flex flex-col gap-2 p-2">
                          <div className="flex flex-row gap-1 divide-x divide-customLightgray">
                            {tech.map(({ name, link }, index) => (
                              <a
                                href={link}
                                target="blank"
                                rel="noopener noreferrer"
                                key={index}
                              >
                                <div className="text-xs hover:text-dirtyWhite dark:hover:text-customBlack/50 w-fit text-customLightgray dark:text-customBlack px-2">
                                  {name}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/2 flex flex-col   p-2">
                        <div className="flex flex-col">
                          <div className="text-customBlack dark:text-dirtyWhite text-lg font-medium">
                            {title}
                          </div>
                          <div className="text-customGray dark:text-dirtyWhite/50 indent-8">
                            {desc}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-customBlack dark:text-dirtyWhite text-lg font-medium">
                            What's on the app?
                          </div>
                          <div className="p-2 text-customGray dark:text-dirtyWhite/50">
                            {func.map((res, index) => (
                              <li key={index}>{res}</li>
                            ))}
                          </div>
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
