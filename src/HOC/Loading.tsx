
import Lottie from "lottie-react";
import mailsend from "../json/mailsend.json"
export default function Loading() {
  return (
    <div className='flex h-screen w-full bg-customBlack justify-center items-center'>
    <Lottie animationData={mailsend} loop={true} />
    </div>
  )
}
