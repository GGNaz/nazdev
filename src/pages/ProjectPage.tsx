import { useNavigate } from "react-router-dom";
import netflixlogo from "../assets/projects/netflixlogo.png";
import pokedex from "../assets/projects/pokedex.png";
import snakeandladder from "../assets/projects/snakeandladder.png";
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
        { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
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
      image: netflixlogo,
      link: "https://movie-finder-zeta-virid.vercel.app/",
      bgColor: "bg-customBlack",
      textColor: "text-dirtyWhite",
    },
    {
      _id: 2,
      title: "Pokedex",
      tech: [
        { name: "NextJS", link: "https://nextjs.org/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        { name: "Pokeapi", link: "https://pokeapi.co/" },
      ],

      desc: "Pokedex is collection depicts existed Pokemon library, basic info, abilities, basic stats, habitats, Types, Evolution etc.",
      func: [
        "A detailed description of the Pokemon's physical appearance, characteristics, and natural habitat.",
        "The primary type(s) of the Pokemon (e.g., Fire, Water, Grass) and their unique abilities and traits.",
        "The evolutionary stages of the Pokemon, including pre-evolutions and evolutions.",
        "Vital combat statistics, such as base stats, move pool, and learning abilities.",
        "A unique numerical identifier assigned to each Pokemon species, making it easy to keep track of every Pokemon encountered",
      ],
      delay: 0.3,
      image: pokedex,
      link: "https://pokedex-nzrdv.vercel.app/",
      bgColor: "bg-customRed",
      textColor: "text-dirtyWhite",
    },
    {
      _id: 3,
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
      delay: 0.5,
      image: snakeandladder,
      link: "https://snake-and-ladder-beta.vercel.app/",
      bgColor: "bg-customYellow",
      textColor: "text-customBlack",
    },
  ];
  return (
    <div className="flex justify-center bg-customWhite dark:bg-customBlack py-10">
      <div className="flex flex-col gap-5 max-w-5xl w-full p-5  ">
        <div className="fixed z-50 left-0 top-3">
          <button
            className="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-300 flex flex-row gap-2 bg-customBlack/80 dark:bg-customWhite/80 py-3 px-5 text-dirtyWhite dark:text-customBlack items-center"
            onClick={() => navigate("/")}
          >
            <RiArrowLeftLine />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative animate__animated animate__backInRight">
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
                const {
                  _id,
                  title,
                  desc,
                  func,
                  tech,
                  delay,
                  image,
                  link,
                  bgColor,
                  textColor,
                } = data ?? {};
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
                      {/* bg-customBlack dark:bg-white */}
                      <div
                        className={`basis-1/2  flex flex-col  cursor-pointer ${bgColor} min-h-full`}
                      >
                        <div className="flex justify-center w-full  relative h-full">
                          <div className="flex justify-center items-center">
                            <img
                              src={image}
                              alt={title}
                              className="z-20 max-h-40 "
                            />
                          </div>

                          <div className="absolute group/item text-customWhite w-full h-full hover:bg-customBlack/80 z-40">
                            <a
                              href={link}
                              target="blank"
                              rel="noopener noreferrer"
                            >
                              <div className=" absolute h-full w-full flex justify-center items-center group/edit invisible  group-hover/item:visible">
                                <div className="">Demo</div>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 p-2">
                          <div className="flex flex-row overflow-hidden overflow-y-scroll gap-1 items-center divide-x divide-customLightgray">
                            {tech.map(({ name, link }, index) => (
                              <a
                                href={link}
                                target="blank"
                                rel="noopener noreferrer"
                                key={index}
                              >
                                <div
                                  className={`text-xs  w-fit ${textColor} px-2`}
                                >
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
