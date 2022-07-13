import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamSlider from "./TeamSlider";

const Team = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationLR = useAnimation();
  const animationBT = useAnimation();
  const animationRL = useAnimation();
  const animationTB = useAnimation();
  const pathAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLR.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationRL.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
        },
      });
      animationTB.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
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
      animationLR.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      animationTB.start({ opacity: 0, y: "-30px" });
      animationRL.start({ opacity: 0, x: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);
  return (
    <div ref={ref} className="w-full h-screen bg-white">
      <div className="w-full h-full bg-[#F9F9FC] rounded-tl-[100px] rounded-br-[100px] relative p-6">
        <div className="pt-10">
          <div className="flex flex-col items-center justify-center">
            <div
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
              className="pb-2 text-3xl left-[5%]"
            >
              <h2>Key People</h2>
            </div>
            <p className="py-2 text-center">
              Meet the key people who have chosen to make a career at NMG. They
              are responsible for creating a culture that retains outstanding
              people.
            </p>
          </div>
          <div>
            <div>
              <TeamSlider />
            </div>
          </div>
        </div>
        <motion.div
          animate={animationLR}
          className="absolute top-[-15px] left-[180px] md:top-[-15px] md:left-[700px] lg:top-[-15px] lg:left-[700px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.753"
            height="68.729"
            viewBox="0 0 57.753 68.729"
          >
            <motion.path
              animate={pathAnimation}
              id="Path_28"
              data-name="Path 28"
              d="M427.716,839.841s-7.06,37.653,34.123,40.006c17.05.974,15.906-8.584,11.461-11.49-8.277-4.022-25.408,2.535-11.461,22.757A34.61,34.61,0,0,0,480.426,903.8"
              transform="translate(-425.11 -837.507)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="4"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={animationBT}
          className="absolute top-[45px] left-[235px] md:top-[45px] md:left-[755px] lg:top-[45px] lg:left-[755px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.243"
            height="26.833"
            viewBox="0 0 22.243 26.833"
          >
            <path
              id="Path_29"
              data-name="Path 29"
              d="M554.2,163.5s14.357,1.683,14.357-10.24c-.477,11.923,8.476,10.24,8.476,10.24s-8.562-.581-7.608,8C567.99,164.351,554.2,163.5,554.2,163.5Z"
              transform="translate(173.505 -552.196) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={animationRL}
          className="absolute top-[-25px] left-[180px] md:top-[-25px] md:left-[700px] lg:top-[-25px] lg:left-[700px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
          >
            <circle id="Ellipse_6" data-name="Ellipse 6" cx="3" cy="3" r="3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
