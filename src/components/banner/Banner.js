import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaReact, FaLinkedinIn} from "react-icons/fa";
import { SiFigma, SiMui } from "react-icons/si"
import { BsFillBootstrapFill } from "react-icons/bs";
import {bannerImg} from "../../assets/index";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Front-end Developer.", "UX/UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-d-black font-titleFont"
    >
      {/*left Banner*/}
      <div className="w-1/2 flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi i'm{" "}
            <span className="text-designColor capitalize">Warawut_S</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Exercitation veniam id aliquip et ullamco mollit laborum laboris
            adipisicing. In ex incididunt commodo eiusmod et commodo est ut.
            Ullamco cupidatat ipsum ipsum est laboris duis est ullamco eiusmod
            aliquip irure ea. Commodo culpa cillum officia exercitation aliquip
            exercitation pariatur deserunt non sint commodo laborum irure
            laborum.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">find me in</h2>
              <div className="flex gap-4">
                  <span className="bannerIcon">
                      <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                      <FaLinkedinIn  />
                  </span>
              </div>
          </div>
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">best skill on</h2>
              <div className="flex gap-4">
                  <span className="bannerIcon">
                      <FaReact />
                  </span>
                  <span className="bannerIcon">
                      <BsFillBootstrapFill  />
                  </span>
                  <span className="bannerIcon">
                      <SiMui  />
                  </span>
                  <span className="bannerIcon">
                      <SiFigma  />
                  </span>
              </div>
            </div>
        </div>
      </div>
      {/*Right Banner */}
      <div className="w-1/2 flex justify-center items-center relative">
        <img src={bannerImg} alt="bannerImg" className="w-[500px] h-[680px] z-10"/>
        <div className="absolute buttom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Banner;
