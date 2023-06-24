import { useEffect } from "react";
import TagCloud from "TagCloud";

export default function Tech() {
  useEffect(() => {
    return () => {
      const texts = [
        "ReactJS",
        "NodeJs",
        "JavaScript",
        "CSS",
        "Material UI",
        "Tailwind",
        "HTML",
        "MySQL",
        "TypeScript",
        "Redux",
        "Zustand",
        "Git",
        "API Intergration",
        "Google Map API's",
        "Socket",
      ];
      const options = {
        radius: 200,
        keep: true,
      };
      const container = ".tagcloud";

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="flex  justify-center w-full">
      <div className="flex justify-center items-center ">
        <span className="tagcloud text-white text-md"></span>
      </div>
    </div>
  );
}
