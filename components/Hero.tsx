import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const { ref, inView } = useInView();
  const animationX = useAnimation();
  const animationY = useAnimation();
  const animationZ = useAnimation();
  const animationBT = useAnimation();
  const pathAnimation = useAnimation();

  const pathRef = useRef(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    const el = pathRef.current;
    gsap.fromTo(
      el,
      { rotation: 0, opacity: 0 },
      {
        rotation: 360,
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: { trigger: el },
      }
    );
  }, [inView]);

  useEffect(() => {
    if (inView) {
      animationX.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "fade",
        },
      });
      animationY.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "fade",
        },
      });
      animationZ.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "ease-out",
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "ease-out",
        },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animationX.start({ opacity: 0, x: "-30px" });
      animationY.start({ opacity: 0, x: "30px" });
      animationZ.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 1, ease: "easeInOut" } },
  };

  return (
    <div ref={ref} className="w-full h-screen pt-20 bg-white rouded-br-[100px]">
      <div className="flex flex-col p-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center md:flex-1 md:items-start">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-[700px] h-full md:items-start"
            >
              <h1
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="4"
                className="md:pt-20 pt-[180px] text-4xl md:text-6xl tracking-wider md:tracking-normal text-center text-gray-700"
              >
                Global Search.
                <br />
                Specialist Expertise.
                <br />
                Local Knowledge.
              </h1>
            </motion.div>
            <div className="pt-10 max-w-[700px] text-center text-xl md:text-left">
              <p>
                The NMG Group is global advisory and intermediary firm focused
                excluveli on the financial service sector.
              </p>
            </div>
            <div className="pt-10">
              <button className="flex items-center bg-[#c61526] rounded-xl justify-center p-4 text-white gap-4 text-xl hover:scale-110 transition-all ease-out">
                Learn More <TbArrowWaveRightUp size={30} />
              </button>
            </div>
          </div>
          <div className="hidden md:flex-1 md:inline-block">
            <div className="px-20 py-20">
              <Image
                src="/assets/business-people-office.png"
                width="408px"
                height="580px"
                className="relative z-20"
              />
              <div className="w-[408px] h-[580px] border-[5px] border-[#f5f6fc] rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl z-10 absolute top-[160px] right-[380px]"></div>
              <div className="w-[308px] h-[480px] border-[5px] border-[#f5f6fc] rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl z-10 absolute top-[300px] right-[330px]"></div>
            </div>
            <motion.div className="absolute z-30 top-[270px] right-[630px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="268"
                height="268"
                viewBox="0 0 268 268"
              >
                <defs>
                  <filter
                    id="Rectangle_12"
                    x="0"
                    y="0"
                    width="268"
                    height="268"
                    filterUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur stdDeviation="33" result="blur" />
                    <feFlood flood-color="#101140" flood-opacity="0.18" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_8"
                  data-name="Group 8"
                  transform="translate(-571 -141)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 571, 141)"
                    filter="url(#Rectangle_12)"
                  >
                    <rect
                      id="Rectangle_12-2"
                      data-name="Rectangle 12"
                      width="70"
                      height="70"
                      rx="13"
                      transform="translate(99 75)"
                      fill="#fff"
                    />
                  </g>
                  <motion.path
                    animate={pathAnimation}
                    id="Path_19"
                    data-name="Path 19"
                    d="M544.532,230.087h18.075a19.565,19.565,0,0,0-18.075-18.075Z"
                    transform="translate(162.893 18.334)"
                    fill="#c61526"
                  />
                  <motion.path
                    animate={pathAnimation}
                    id="Path_20"
                    data-name="Path 20"
                    d="M259.061,262.573V241.629a19.562,19.562,0,1,0,20.944,20.944Z"
                    transform="translate(443.567 -9.047)"
                    fill="none"
                    stroke="#c61526"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </motion.div>
            <motion.div
              animate={animationZ}
              className="absolute z-30 top-[550px] right-[600px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="341"
                height="293"
                viewBox="0 0 341 293"
              >
                <defs>
                  <filter
                    id="Rectangle_10"
                    x="0"
                    y="0"
                    width="341"
                    height="293"
                    filterUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur stdDeviation="33" result="blur" />
                    <feFlood flood-color="#101140" flood-opacity="0.18" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_9"
                  data-name="Group 9"
                  transform="translate(-520 -475)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 520, 475)"
                    filter="url(#Rectangle_10)"
                  >
                    <rect
                      id="Rectangle_10-2"
                      data-name="Rectangle 10"
                      width="143"
                      height="95"
                      rx="13"
                      transform="translate(99 75)"
                      fill="#fff"
                    />
                  </g>
                  <text
                    id="Financial_Service"
                    data-name="Financial Service"
                    transform="translate(634 576)"
                    font-size="14"
                    font-family="SegoeUI, Segoe UI"
                    letter-spacing="0.03em"
                  >
                    <tspan x="0" y="0">
                      Financial Service
                    </tspan>
                  </text>
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="112.5"
                    transform="translate(635.5 620.5)"
                    fill="none"
                    stroke="#d0d0d0"
                    stroke-width="1"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    y2="22"
                    transform="translate(733.5 598.5)"
                    fill="none"
                    stroke="#d0d0d0"
                    stroke-width="1"
                  />
                  <motion.path
                    animate={pathAnimation}
                    id="Path_17"
                    data-name="Path 17"
                    d="M635,591s60.516,2.726,111.313-42.531"
                    transform="translate(0 40)"
                    fill="none"
                    stroke="#c61526"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke-dasharray="3 5"
                  />
                  <circle
                    id="Ellipse_2"
                    data-name="Ellipse 2"
                    cx="4"
                    cy="4"
                    r="4"
                    transform="translate(740 586)"
                    fill="#c61526"
                    stroke="#fff"
                    stroke-width="2"
                  />
                  <text
                    id="_2021-2022"
                    data-name="2021-2022"
                    transform="translate(641 591)"
                    fill="#b8b8b8"
                    font-size="8"
                    font-family="Roboto-Medium, Roboto"
                    font-weight="500"
                    letter-spacing="0.03em"
                  >
                    <tspan x="0" y="0">
                      2021-2022
                    </tspan>
                  </text>
                  <g
                    id="Group_5"
                    data-name="Group 5"
                    transform="translate(-42.969 0.97)"
                  >
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M0,0H2.834V2.834"
                      transform="translate(676.969 587.473) rotate(-45)"
                      fill="none"
                      stroke="#43d0af"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                    <line
                      id="Line_3"
                      data-name="Line 3"
                      y1="3.958"
                      transform="translate(678.973 585.493)"
                      fill="none"
                      stroke="#43d0af"
                      stroke-linecap="round"
                      stroke-width="1"
                    />
                  </g>
                </g>
              </svg>
            </motion.div>
            <motion.div
              animate={animationY}
              className="absolute z-30 top-[250px] right-[180px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="375"
                height="258"
                viewBox="0 0 375 258"
              >
                <defs>
                  <filter
                    id="Rectangle_11"
                    x="0"
                    y="0"
                    width="375"
                    height="258"
                    filterUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur stdDeviation="33" result="blur" />
                    <feFlood flood-color="#101140" flood-opacity="0.18" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_64"
                  data-name="Group 64"
                  transform="translate(-963 -88)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 963, 88)"
                    filter="url(#Rectangle_11)"
                  >
                    <rect
                      id="Rectangle_11-2"
                      data-name="Rectangle 11"
                      width="177"
                      height="60"
                      rx="13"
                      transform="translate(99 75)"
                      fill="#fff"
                    />
                  </g>
                  <text
                    id="Global_Advisory"
                    data-name="Global Advisory"
                    transform="translate(1119 197)"
                    font-size="14"
                    font-family="SegoeUI, Segoe UI"
                    letter-spacing="0.03em"
                  >
                    <tspan x="0" y="0">
                      Global Advisory
                    </tspan>
                  </text>
                  <path
                    ref={pathRef}
                    id="Path_21"
                    data-name="Path 21"
                    d="M256.574,284.187v2.563c-.038.288-.071.577-.116.864a14.668,14.668,0,0,1-4.915,9.042,14.516,14.516,0,0,1-12.014,3.6A14.936,14.936,0,0,1,227,282.743c1.207-6.039,4.918-9.93,10.814-11.7a23.578,23.578,0,0,1,2.569-.482h2.563c.488.072.983.115,1.464.221a14.769,14.769,0,0,1,11.665,10.785A24.144,24.144,0,0,1,256.574,284.187Zm-25.519.386c.728,0,1.456-.005,2.183,0,.218,0,.309-.065.322-.3a23.164,23.164,0,0,1,.916-5.467c.074-.246,0-.336-.222-.429q-1.165-.492-2.312-1.027c-.435-.2-.428-.218-.718.165a13.1,13.1,0,0,0-2.636,6.743c-.023.231.052.315.284.313C229.6,284.568,230.327,284.573,231.055,284.574Zm.008,1.79c-.631,0-1.262,0-1.892,0-.662,0-.617-.037-.545.591a13.032,13.032,0,0,0,2.7,6.6.326.326,0,0,0,.485.106c.8-.381,1.6-.747,2.412-1.087.265-.111.326-.217.243-.492a23,23,0,0,1-.9-5.382c-.014-.25-.092-.339-.345-.335C232.5,286.372,231.781,286.364,231.063,286.364Zm21.191-1.79c.718,0,1.436,0,2.154,0,.328,0,.361-.039.322-.348-.032-.25-.058-.5-.1-.75a13.026,13.026,0,0,0-2.642-6.1c-.142-.182-.26-.19-.463-.094q-1.223.576-2.466,1.108c-.231.1-.278.2-.208.437a23.219,23.219,0,0,1,.911,5.439c.013.241.1.318.334.315C250.818,284.567,251.536,284.574,252.254,284.574Zm2.482,2.075c.047-.249-.091-.287-.286-.287q-2.183,0-4.367,0c-.223,0-.3.076-.316.3a23.344,23.344,0,0,1-.916,5.467c-.068.226-.014.322.2.415q1.255.54,2.492,1.121a.3.3,0,0,0,.44-.092A13.044,13.044,0,0,0,254.736,286.649Zm-16.679-2.076c.805,0,1.611,0,2.416,0,.206,0,.3-.063.3-.283q-.009-2.183,0-4.367c0-.181-.067-.26-.253-.272a22.335,22.335,0,0,1-3.938-.573c-.186-.046-.285-.007-.342.189a21.774,21.774,0,0,0-.843,4.921c-.021.369,0,.382.364.383Q236.907,284.575,238.057,284.573Zm7.186,0q1.164,0,2.329,0c.36,0,.384-.014.363-.384a21.963,21.963,0,0,0-.843-4.921c-.065-.224-.188-.212-.372-.184-1.283.2-2.566.389-3.852.562-.237.032-.313.107-.312.339.007,1.417.01,2.834,0,4.25,0,.278.1.347.36.342C243.689,284.566,244.466,284.574,245.242,284.574Zm-7.161,1.79h-2.213c-.492,0-.507,0-.473.5a22.5,22.5,0,0,0,.831,4.777c.066.227.179.24.385.208,1.282-.2,2.566-.39,3.852-.562.241-.032.309-.114.308-.343q-.01-2.125,0-4.25c0-.251-.077-.343-.334-.339C239.653,286.372,238.867,286.364,238.081,286.364Zm7.165,0c-.8,0-1.591,0-2.387,0-.2,0-.3.054-.3.279q.009,2.183,0,4.367c0,.177.059.264.249.276a22.341,22.341,0,0,1,3.967.578c.183.045.265-.016.316-.189a22.424,22.424,0,0,0,.852-4.949c.018-.287-.091-.369-.366-.364C246.8,286.373,246.022,286.364,245.246,286.364Zm-2.651-13.807a2.55,2.55,0,0,0-.035.274c0,1.561,0,3.122-.005,4.683,0,.249.1.339.33.307,1.073-.149,2.147-.3,3.22-.451.236-.033.264-.154.163-.344-.314-.59-.6-1.2-.946-1.767a7.424,7.424,0,0,0-2.269-2.459C242.92,272.714,242.772,272.65,242.595,272.557Zm-1.86,25.856c.02-.151.032-.2.032-.245,0-1.59,0-3.18,0-4.77,0-.217-.087-.31-.3-.281q-1.653.231-3.3.467c-.173.025-.2.124-.135.27.163.341.315.688.494,1.02a9.2,9.2,0,0,0,2.385,3.008C240.155,298.068,240.425,298.214,240.735,298.413Zm1.842-.045a1.925,1.925,0,0,0,.244-.1,5.786,5.786,0,0,0,.561-.362,10.348,10.348,0,0,0,2.907-4.044c.088-.2,0-.268-.179-.293l-3.19-.454c-.283-.04-.368.082-.366.36.01,1.522,0,3.044.006,4.567C242.559,298.135,242.569,298.228,242.577,298.368Zm-1.827-25.844c-.294.181-.536.3-.746.463a10.212,10.212,0,0,0-2.97,4.1c-.068.151-.028.243.141.267,1.073.155,2.144.322,3.218.46.356.046.374,0,.375-.367q0-2.269,0-4.537C240.768,272.816,240.759,272.721,240.75,272.524Zm-3.53.626a12.425,12.425,0,0,0-4.422,2.661c.788.325,1.5.626,2.219.905.057.022.215-.077.249-.154A17.465,17.465,0,0,1,237.22,273.15Zm8.866-.04c.383.595.757,1.125,1.077,1.687s.6,1.171.884,1.764a.243.243,0,0,0,.371.136c.49-.207.983-.408,1.472-.619.192-.083.374-.188.6-.306A13.083,13.083,0,0,0,246.085,273.109Zm4.389,22.077a1.253,1.253,0,0,0-.171-.12c-.621-.274-1.245-.541-1.865-.819-.224-.1-.324-.015-.42.189-.273.579-.545,1.161-.862,1.716s-.695,1.092-1.07,1.675A13.121,13.121,0,0,0,250.474,295.186Zm-17.614,0a12.445,12.445,0,0,0,4.364,2.6,16.64,16.64,0,0,1-1.958-3.436c-.072-.167-.183-.182-.328-.119q-.96.417-1.919.836A1,1,0,0,0,232.86,295.19Z"
                    transform="translate(851.083 -91.777)"
                    fill="#c61526"
                  />
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 w-full my-3 md:hidden max-w-[80%] mx-auto mt-10">
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <FaLinkedinIn size={30} />
          </div>
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <FaGithub size={30} />
          </div>
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <AiOutlineMail size={30} />
          </div>
          <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <BsFillPersonLinesFill size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
