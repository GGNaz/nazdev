import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import { useNavigate } from "react-router-dom";
export default function BackBtn() {
  const navigate = useNavigate();
  return (
    <button
      className="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-300 flex flex-row gap-2 bg-customBlack/80 dark:bg-customWhite/80 py-3 px-5 text-dirtyWhite dark:text-customBlack items-center"
      onClick={() => navigate("/")}
    >
      <RiArrowLeftLine />
    </button>
  );
}
