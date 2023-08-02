import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
export default function Tech() {
  const texts = [
    "ReactJS",
    "JavaScript",
    "CSS",
    "Material UI",
    "Tailwindcss",
    "HTML",
    "MySQL",
    "TypeScript",
    "Redux",
    "Zustand",
    "Git",
    "API Intergration",
    "Google Map API's",
    "Socket",
    "NextJS",
    "AWS S3",
    "Chart.js",
  ];

  return (
    <div className="flex w-full justify-center items-center">
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
        })}
        className="dark:text-white text-customBlack"
        onClick={(tag: string) => alert(tag)}
        // onClickOptions={{ passive: true }}
      >
        {texts}
      </TagCloud>
    </div>
  );
}
