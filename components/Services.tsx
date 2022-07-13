import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
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
    <div
      ref={ref}
      className="w-full h-auto bg-white rounded-tl-[100px] rounded-br-[100px] pt-10 pb-10"
    >
      <div className="relative">
        <div className="pt-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <div
                data-scroll
                data-scroll-speed="-6"
                data-scroll-direction="horizontal"
                className="pb-2 text-3xl left-[5%]"
              >
                <h2>Our Services</h2>
              </div>
              <p className="py-2">
                Specialised and tailored for you, we have a range of services
                below. Please contact us to know more about our smart financial
                products & services.
              </p>
            </div>
            <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 justify-center items-center">
              <motion.div
                animate={animationLR}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51.203"
                    height="45.026"
                    viewBox="0 0 51.203 45.026"
                  >
                    <g
                      id="Group_27"
                      data-name="Group 27"
                      transform="translate(1.036 1.028)"
                    >
                      <path
                        id="Path_76"
                        data-name="Path 76"
                        d="M126.648,427.465l10.015,2.411a3.457,3.457,0,0,0,3.946-1.908h0a3.456,3.456,0,0,0-1.788-4.636l-11.141-4.723a10.054,10.054,0,0,0-5.589-.658l-10.33,1.735a4.267,4.267,0,0,1-.856.055l-.863-.031"
                        transform="translate(-110.042 -395.464)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_77"
                        data-name="Path 77"
                        d="M141.092,431.035l13.428-3.3a3.723,3.723,0,0,1,4.467,2.593h0a3.724,3.724,0,0,1-2.072,4.427l-15.274,6.764a12.048,12.048,0,0,1-7.521.739L116.933,438.4a14.707,14.707,0,0,0-3.319-.358l-3.572.022"
                        transform="translate(-110.042 -399.571)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_78"
                        data-name="Path 78"
                        d="M155.169,381.166c-12.431-7.749-17.719,12.06,0,18.647C172.888,393.226,167.6,373.418,155.169,381.166Z"
                        transform="translate(-124.152 -379.396)"
                        fill="#c61526"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <g
                        id="Group_26"
                        data-name="Group 26"
                        transform="translate(26.672 5.84)"
                      >
                        <line
                          id="Line_4"
                          data-name="Line 4"
                          y2="8.69"
                          transform="translate(4.345 0.046)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_5"
                          data-name="Line 5"
                          x1="8.69"
                          transform="translate(0 4.345)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_6"
                          data-name="Line 6"
                          y2="8.69"
                          transform="translate(4.345)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h1 className="pb-4 text-3xl">Healthcare</h1>
                <p className="pb-6">
                  At NMG Benefits, we work in partnership with you to enhance
                  and maintain the wellbeing and health of your employees...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationTB}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37.308"
                    height="43.355"
                    viewBox="0 0 37.308 43.355"
                  >
                    <g
                      id="Group_53"
                      data-name="Group 53"
                      transform="translate(-618.346 -2146)"
                    >
                      <circle
                        id="Ellipse_8"
                        data-name="Ellipse 8"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(630 2146)"
                        fill="#c61526"
                      />
                      <g
                        id="Group_31"
                        data-name="Group 31"
                        transform="translate(240.094 -336.35)"
                      >
                        <path
                          id="Path_79"
                          data-name="Path 79"
                          d="M279.226,433.864a21.694,21.694,0,0,1-34.5,0"
                          transform="translate(134.932 2082.3)"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_7"
                          data-name="Line 7"
                          y1="13.106"
                          x2="5.277"
                          transform="translate(385.943 2508.626)"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_8"
                          data-name="Line 8"
                          x1="5.277"
                          y1="13.106"
                          transform="translate(402.19 2508.626)"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_80"
                          data-name="Path 80"
                          d="M271.978,398.7h-20.16l-5.441-17.823"
                          transform="translate(134.081 2109.543)"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                      <g
                        id="Group_37"
                        data-name="Group 37"
                        transform="translate(-260 -651)"
                      >
                        <g
                          id="Group_29"
                          data-name="Group 29"
                          transform="translate(896.451 2801.832)"
                        >
                          <path
                            id="Path_89"
                            data-name="Path 89"
                            d="M546.065,394.7H544.6a1.848,1.848,0,0,1-1.843-1.843h0a1.848,1.848,0,0,1,1.843-1.843h3.3"
                            transform="translate(-542.761 -391.011)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_90"
                            data-name="Path 90"
                            d="M544.6,399.474h1.462a1.848,1.848,0,0,1,1.843,1.843h0a1.848,1.848,0,0,1-1.843,1.843h-3.3"
                            transform="translate(-542.761 -395.788)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </g>
                        <line
                          id="Line_9"
                          data-name="Line 9"
                          y1="1.691"
                          transform="translate(899.613 2800.141)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_10"
                          data-name="Line 10"
                          y1="1.691"
                          transform="translate(899.024 2809.398)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h1 className="pb-4 text-3xl">Retirement</h1>
                <p className="pb-6">
                  If you want your employees to go further for you today, you
                  need to give them peace of mind for tomorrow...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44.483"
                    height="41.515"
                    viewBox="0 0 44.483 41.515"
                  >
                    <g
                      id="Group_45"
                      data-name="Group 45"
                      transform="translate(-194.584 -2802.326)"
                    >
                      <path
                        id="Path_82"
                        data-name="Path 82"
                        d="M553.063,401.149l-5.869,4.482-5.47-5.345-12.863,9.6a16.461,16.461,0,1,1,24.2-8.738Z"
                        transform="translate(-325.033 2422.926)"
                        fill="#c61526"
                      />
                      <g
                        id="Group_43"
                        data-name="Group 43"
                        transform="translate(195.984 2817.188)"
                      >
                        <path
                          id="Path_87"
                          data-name="Path 87"
                          d="M562.09,404.37l-9.024,6.887-5.869,4.482-5.47-5.345-12.863,9.6-7.845,5.857"
                          transform="translate(-521.02 -404.37)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                      <g
                        id="Group_44"
                        data-name="Group 44"
                        transform="translate(195.984 2819.311)"
                      >
                        <path
                          id="Path_87-2"
                          data-name="Path 87"
                          d="M562.09,404.37l-9.024,6.887-5.869,4.482-5.47-5.345-12.863,9.6-7.845,5.857"
                          transform="translate(-521.02 -402.721)"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_88"
                          data-name="Path 88"
                          d="M581.149,401.6h6.294v6.294"
                          transform="translate(-545.359 -401.6)"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                      <g
                        id="Group_29"
                        data-name="Group 29"
                        transform="translate(208.924 2809.236)"
                      >
                        <path
                          id="Path_89"
                          data-name="Path 89"
                          d="M547.277,396.048h-2a2.526,2.526,0,0,1-2.518-2.519h0a2.526,2.526,0,0,1,2.518-2.518H549.8"
                          transform="translate(-542.761 -391.011)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_90"
                          data-name="Path 90"
                          d="M545.279,399.474h2a2.526,2.526,0,0,1,2.519,2.518h0a2.526,2.526,0,0,1-2.519,2.519h-4.516"
                          transform="translate(-542.761 -394.437)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                      <line
                        id="Line_9"
                        data-name="Line 9"
                        y1="2.311"
                        transform="translate(213.246 2806.925)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_10"
                        data-name="Line 10"
                        y1="2.311"
                        transform="translate(212.441 2819.577)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="pb-4 text-3xl">Personal Financial Services</h1>
                <p className="pb-6">
                  At NMG Benefits, we work in partnership with you to enhance
                  and maintain the wellbeing and health of your employees...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationLR}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43.281"
                    height="42.633"
                    viewBox="0 0 43.281 42.633"
                  >
                    <g
                      id="Group_50"
                      data-name="Group 50"
                      transform="translate(-934.38 -2793)"
                    >
                      <path
                        id="Path_92"
                        data-name="Path 92"
                        d="M662.045,412.1v.953a3.581,3.581,0,0,1-3.572,3.572H635.722a3.581,3.581,0,0,1-3.572-3.572V382.972a3.581,3.581,0,0,1,3.572-3.572h3.539c10.747.149,8.315-.322,15.673,0h3.539a3.581,3.581,0,0,1,3.572,3.572V412.1Z"
                        transform="translate(303.23 2418.013)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_94"
                        data-name="Path 94"
                        d="M696.275,413.132c.054-2.389.057-2.407-1.909-2.669a18.99,18.99,0,0,1-8.59-3.241,1.288,1.288,0,0,0-1.685-.041,19.135,19.135,0,0,1-9.273,3.366c-1.093.113-1.341.577-1.319,1.506a32.405,32.405,0,0,0,1.742,10.082c1.608,4.561,4.227,8.413,8.763,10.9a1.669,1.669,0,0,0,1.83-.009,17.328,17.328,0,0,0,5.474-4.741C694.813,423.611,695.94,418.253,696.275,413.132Z"
                        transform="translate(280.381 2398.192)"
                        fill="#fff"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_35"
                        data-name="Rectangle 35"
                        width="15.67"
                        height="6.845"
                        rx="3"
                        transform="translate(942.492 2794)"
                        fill="#fff"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_11"
                        data-name="Line 11"
                        x2="11.758"
                        transform="translate(940.164 2809.3)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_12"
                        data-name="Line 12"
                        x2="5.879"
                        transform="translate(940.164 2813.973)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_13"
                        data-name="Line 13"
                        x2="1.686"
                        transform="translate(940.164 2829.109)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_91"
                        data-name="Path 91"
                        d="M692.528,412.105c.045-2,.048-2.011-1.6-2.23a15.867,15.867,0,0,1-7.177-2.708,1.076,1.076,0,0,0-1.408-.034,15.987,15.987,0,0,1-7.747,2.812c-.913.095-1.12.482-1.1,1.258a27.073,27.073,0,0,0,1.456,8.423,15.789,15.789,0,0,0,7.321,9.111,1.394,1.394,0,0,0,1.529-.007,14.478,14.478,0,0,0,4.574-3.961C691.307,420.86,692.249,416.383,692.528,412.105Z"
                        transform="translate(282.256 2400.365)"
                        fill="#c61526"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_93"
                        data-name="Path 93"
                        d="M691.91,419.407l-5.266,5.266-2.45-2.451"
                        transform="translate(277.759 2395.714)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="pb-4 text-3xl">Short-term Insurance</h1>
                <p className="pb-6">
                  Identifying and mitigating risks is a challenging, but
                  important responsibility that...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationBT}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="40"
                    viewBox="0 0 48 40"
                  >
                    <g
                      id="Group_52"
                      data-name="Group 52"
                      transform="translate(-986 -2159)"
                    >
                      <rect
                        id="Rectangle_25"
                        data-name="Rectangle 25"
                        width="16"
                        height="8"
                        rx="2"
                        transform="translate(1017 2190)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_29"
                        data-name="Rectangle 29"
                        width="16"
                        height="8"
                        rx="2"
                        transform="translate(997 2190)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_26"
                        data-name="Rectangle 26"
                        width="16"
                        height="7"
                        rx="2"
                        transform="translate(1017 2179)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_27"
                        data-name="Rectangle 27"
                        width="16"
                        height="9"
                        rx="2"
                        transform="translate(1017 2166)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <circle
                        id="Ellipse_8"
                        data-name="Ellipse 8"
                        cx="12.5"
                        cy="12.5"
                        r="12.5"
                        transform="translate(986 2159)"
                        fill="#c61526"
                      />
                      <g
                        id="Group_51"
                        data-name="Group 51"
                        transform="translate(99.549 -634.141)"
                      >
                        <g
                          id="Group_29"
                          data-name="Group 29"
                          transform="translate(896.451 2801.832)"
                        >
                          <path
                            id="Path_89"
                            data-name="Path 89"
                            d="M546.065,394.7H544.6a1.848,1.848,0,0,1-1.843-1.843h0a1.848,1.848,0,0,1,1.843-1.843h3.3"
                            transform="translate(-542.761 -391.011)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <path
                            id="Path_90"
                            data-name="Path 90"
                            d="M544.6,399.474h1.462a1.848,1.848,0,0,1,1.843,1.843h0a1.848,1.848,0,0,1-1.843,1.843h-3.3"
                            transform="translate(-542.761 -395.788)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </g>
                        <line
                          id="Line_9"
                          data-name="Line 9"
                          y1="1.691"
                          transform="translate(899.613 2800.141)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_10"
                          data-name="Line 10"
                          y1="1.691"
                          transform="translate(899.024 2809.398)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h1 className="pb-4 text-3xl">Investment Consulting</h1>
                <p className="pb-6">
                  The NMG Investment Consulting team is focused on helping our
                  clients develop global-grade investment solutions...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46.984"
                    height="46.984"
                    viewBox="0 0 46.984 46.984"
                  >
                    <g
                      id="Group_42"
                      data-name="Group 42"
                      transform="translate(-813.415 -2793.774)"
                    >
                      <g
                        id="Group_28"
                        data-name="Group 28"
                        transform="translate(816.415 2796.774)"
                      >
                        <path
                          id="Path_81"
                          data-name="Path 81"
                          d="M407.184,421.909l9.834,9.834a4.021,4.021,0,0,1,0,5.687h0a4.021,4.021,0,0,1-5.687,0L401.5,427.6"
                          transform="translate(-375.211 -395.623)"
                          fill="#c61526"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <circle
                          id="Ellipse_12"
                          data-name="Ellipse 12"
                          cx="17.102"
                          cy="17.102"
                          r="17.102"
                          fill="none"
                          stroke="#c61526"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <circle
                          id="Ellipse_13"
                          data-name="Ellipse 13"
                          cx="19.102"
                          cy="19.102"
                          r="19.102"
                          transform="translate(-2 -2)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                      <path
                        id="Path_83"
                        data-name="Path 83"
                        d="M372.482,414.378v11.246A17,17,0,0,1,367,421.944c-.048-.048-.088-.088-.129-.135v-7.43Z"
                        transform="translate(454.42 2404.026)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_84"
                        data-name="Path 84"
                        d="M381.555,400.983V421.8a17.054,17.054,0,0,1-5.61-1.292V400.983Z"
                        transform="translate(450.957 2409.138)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_85"
                        data-name="Path 85"
                        d="M390.627,408.151v15.793a16.892,16.892,0,0,1-5.609.6V408.151Z"
                        transform="translate(447.494 2406.402)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_86"
                        data-name="Path 86"
                        d="M399.7,393.333v22.195a16.82,16.82,0,0,1-5.61,2.761V393.333Z"
                        transform="translate(444.031 2412.059)"
                        fill="none"
                        stroke="#c61526"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="pb-4 text-3xl">Report Analysis</h1>
                <p className="pb-6">
                  When it comes to running a business, there will always be
                  challenges… unless you have the help of people who...
                </p>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          animate={animationLR}
          className="absolute left-[170px] top-[-45px] md:top-[-45px] md:left-[700px] lg:top-[-45px] lg:left-[700px] z-[99]"
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
          className="absolute left-[220px] top-[25px] md:top-[25px] md:left-[750px] lg:top-[25px] lg:left-[750px] z-[99]"
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
          className="absolute left-[170px] top-[-55px] md:top-[-55px] md:left-[700px] lg:top-[-55px] lg:left-[700px] z-[99]"
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

export default Services;
