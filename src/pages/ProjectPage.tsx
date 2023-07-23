import { useNavigate } from "react-router-dom";
import netflixlogo from "../assets/projects/netflixlogo.png";
import applestore from "../assets/projects/applestore.png";
import snakeandladder from "../assets/projects/snakeandladder.png";
import spectacles from "../assets/projects/spectacles.png";
import lazpeefy from "../assets/projects/lazpeefy.png";
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
      link: "https://snake-and-ladder-beta.vercel.app/",
      bgColor: "bg-customYellow",
      textColor: "text-customBlack",
    },
    {
      _id: 3,
      title: "Lazpeefy",
      tech: [
        { name: "NextJS", link: "https://nextjs.org/" },
        { name: "Typescript", link: " https://www.typescriptlang.org/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        // { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
      ],

      desc: "Lazpeefy is a e-commerce website, unfortunately its in under development, you can visit the website for current status.",
      func: [
        "Login page",
        "Add to Cart",
        "Show the list of products",
        "View the added products on the cart",
        "Remove products from the cart",
        "Checkout the products",
        "Shows the breakdown of total payment",
        "View details of specific item",
      ],
      delay: 0.4,
      image: lazpeefy,
      link: "https://lazpeefy.vercel.app/",
      bgColor: "bg-customViolet",
      textColor: "text-white",
    },
    {
      _id: 4,
      title: "Apple Store",
      tech: [
        { name: "ReactJS", link: "https://react.dev/" },
        { name: "Typescript", link: " https://www.typescriptlang.org/" },
        { name: "Material UI (MUI)", link: "https://mui.com/" },
        { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
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
      delay: 0.5,
      image: applestore,
      link: "https://apple-store-seven.vercel.app/",
      bgColor: "bg-customAsh",
      textColor: "text-customBlack",
    },
    {
      _id: 5,
      title: "Spectacles",
      tech: [
        { name: "ReactJS", link: "https://react.dev/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
      ],

      desc: "Redesign the landing page of spectacles, also known as an eyeglasses store or an optical shop, is a retail establishment that specializes in selling prescription eyeglasses, sunglasses, and other vision-related products. ",
      func: ["View landing page"],
      delay: 0.5,
      image: spectacles,
      link: "https://e-commerce-six-omega.vercel.app/",
      bgColor: "bg-customAsh",
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
                          <div className="flex flex-row gap-1 items-center divide-x divide-customLightgray">
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
