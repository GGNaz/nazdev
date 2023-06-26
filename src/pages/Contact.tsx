import { useNavigate } from "react-router-dom";

import ScrollAnimation from "../components/ScrollAnimation";
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Sending from "../HOC/Sending";
import { errorpop } from "../utils/errorpop";

type FormProps = {
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  message: string;
  user_company: string;
};

type EmailProps = {
  status: number;
  text: string;
};

export default function Contact() {
  const navigate = useNavigate();

  const defaultVal = {
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    message: "",
    user_company: "",
  };
  const [formVal, setFormVal] = useState<FormProps>(defaultVal);
  const [loading, setLoading] = useState<boolean>(false);
  const [validate, setValidate] = useState<boolean>(false);

  const checkfields = () => {
    const { user_firstname, user_lastname, user_email, message } =
      formVal ?? {};
    if (
      user_firstname === "" ||
      user_lastname === "" ||
      user_email === "" ||
      message === ""
    )
      return setValidate(true);
    else {
      setValidate(false);

      return sendEmail();
    }
  };

  const sendEmail = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (!loading) {
      emailjs
        .send(
          "service_z21jllx",
          "template_by7rz69",
          formVal,
          "tAzzZd5FoqEGHDHI3"
        )
        .then(
          (result: EmailProps) => {
            console.log(
              "🚀 ~ file: Contact.tsx:54 ~ sendEmail ~ result:",
              result
            );
            return setFormVal(defaultVal);
            // console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    }
  };

  const formLayout = () => {
    return (
      <div className="grid grid-rows-1 max-w-3xl">
        <div className="grid grid-cols-2 gap-5">
          <ScrollAnimation
            animateTo={{ y: 0 }}
            animateFrom={{ y: 50 }}
            delay={0.5}
          >
            <div className="flex flex-col">
              <div className="text-dirtyWhite/80 text-xs">First name</div>
              <input
                type="text"
                autoComplete="off"
                className={`h-10 px-2 text-dirtyWhite/60 border ${
                  errorpop(formVal?.user_firstname, validate)
                    ? "border-red-700"
                    : "border-customGray"
                } w-full focus:outline-none bg-transparent`}
                name="user_firstname"
                value={formVal?.user_firstname}
                onChange={(e) =>
                  setFormVal({ ...formVal, user_firstname: e.target.value })
                }
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateTo={{ y: 0 }}
            animateFrom={{ y: 50 }}
            delay={0.5}
          >
            <div className="flex flex-col">
              <div className="text-dirtyWhite/80 text-xs">Last name</div>
              <input
                autoComplete="off"
                type="text"
                className={`h-10 px-2 text-dirtyWhite/60 border ${
                  errorpop(formVal?.user_lastname, validate)
                    ? "border-red-700"
                    : "border-customGray"
                } w-full focus:outline-none bg-transparent`}
                name="user_lastname"
                value={formVal?.user_lastname}
                onChange={(e) =>
                  setFormVal({ ...formVal, user_lastname: e.target.value })
                }
              />
            </div>
          </ScrollAnimation>

          <div className="flex flex-col col-span-2">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.7}
            >
              <div className="flex flex-col col-span-2">
                <div className="text-dirtyWhite/80 text-xs">Email</div>
                <input
                  type="email"
                  required
                  autoComplete="off"
                  className={`h-10 px-2 text-dirtyWhite/60 border ${
                    errorpop(formVal?.user_email, validate)
                      ? "border-red-700"
                      : "border-customGray"
                  } w-full focus:outline-none bg-transparent`}
                  name="user_email"
                  value={formVal?.user_email}
                  onChange={(e) =>
                    setFormVal({ ...formVal, user_email: e.target.value })
                  }
                />
              </div>
            </ScrollAnimation>
          </div>
          <div className="flex flex-col col-span-2">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.7}
            >
              <div className="flex flex-col col-span-2">
                <div className="text-dirtyWhite/80 text-xs">
                  Company name (Optional)
                </div>
                <input
                  type="text"
                  autoComplete="off"
                  className="h-10 px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent"
                  name="user_email"
                  value={formVal?.user_company}
                  onChange={(e) =>
                    setFormVal({ ...formVal, user_company: e.target.value })
                  }
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="flex flex-col col-span-2">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.9}
            >
              <div className="flex flex-col col-span-2">
                <div className="text-dirtyWhite/80 text-xs">Message</div>
                <textarea
                  cols={30}
                  autoComplete="off"
                  className={`h-10 px-2 text-dirtyWhite/60 border ${
                    errorpop(formVal?.message, validate)
                      ? "border-red-700"
                      : "border-customGray"
                  } w-full focus:outline-none bg-transparent`}
                  name="message"
                  value={formVal?.message}
                  onChange={(e) =>
                    setFormVal({ ...formVal, message: e.target.value })
                  }
                />
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateTo={{ y: 0 }}
            animateFrom={{ y: 50 }}
            delay={1.1}
          >
            <div
              className="flex flex-col col-span-1 bg-customGray text-dirtyWhite/70 py-2"
              onClick={() => checkfields()}
            >
              <button> Send message</button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  };

  const alternativeLayout = () => {
    return (
      <div className="flex flex-col gap-5 max-w-3xl">
        <div className="grid grid-rows-1 max-w-3xl">
          <div className="grid grid-cols-2 gap-5">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.5}
            >
              <a
                href="https://www.facebook.com/RazenSe"
                target="blank"
                rel="noopener noreferrer"
              >
                <button className="h-10 hover:bg-customGray/50 flex flex-row gap-2 items-center px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent">
                  <FaFacebookSquare /> <span>Facebook</span>
                </button>
              </a>
            </ScrollAnimation>
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 50 }}
              delay={0.5}
            >
              <a
                href="https://www.linkedin.com/in/nazer-somera-b7b598223/"
                target="blank"
                rel="noopener noreferrer"
              >
                <button className="h-10 hover:bg-customGray/50 flex flex-row gap-2 items-center px-2 text-dirtyWhite/60 border border-customGray w-full focus:outline-none bg-transparent">
                  <FaLinkedin /> LinkedIn
                </button>
              </a>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation
          animateTo={{ y: 0 }}
          animateFrom={{ y: 50 }}
          delay={0.5}
        >
          <div className="flex flex-row gap-3 ">
            <div className="w-full flex flex-col justify-center">
              <div className="border-x-2  border w-full border-customLightgray" />
            </div>
            <div className="text-dirtyWhite">OR</div>
            <div className="w-full flex flex-col justify-center">
              <div className="border-x-2  border w-full border-customLightgray" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <Sending />
      ) : (
        <div className="flex justify-center bg-customBlack pb-5">
          <div className="flex flex-col gap-5 max-w-5xl w-full p-5  ">
            <div>
              <button
                className="flex flex-row gap-2  text-customLightgray items-center"
                onClick={() => navigate("/")}
              >
                <RiArrowLeftLine /> Back
              </button>
            </div>
            <div className="flex flex-col gap-8 ">
              <div className="flex flex-col relative animate__animated animate__backInLeft">
                <div className="font-outline-2 text-4xl md:text-6xl lg:text-8xl text-customBlack font-black ">
                  CONTACT ME
                </div>
                <div className="text-dirtyWhite/80 text-xs md:text-xl lg:text-2xl absolute bottom-0">
                  CONTACT ME
                </div>
              </div>
              {alternativeLayout()}
              {formLayout()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
