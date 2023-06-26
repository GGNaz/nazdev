import Lottie from "lottie-react";
import mailsend from "../json/mailsend.json";
import success from "../json/success.json";
import { useEffect, useState } from "react";
export default function Sending() {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  }, []);
  return (
    <div className="flex h-screen w-full bg-customBlack justify-center items-center">
      {show ? (
        <Lottie animationData={success} loop={false} />
      ) : (
        <Lottie animationData={mailsend} loop={true} />
      )}
    </div>
  );
}
