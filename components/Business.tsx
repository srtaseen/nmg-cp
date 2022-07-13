import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Business = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationX = useAnimation();
  const animationY = useAnimation();
  const animationZ = useAnimation();
  const pathAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animationX.start({
        x: 0,
        opacity: 1,
        transition: { type: "fade", duration: 1 },
      });
      animationY.start({
        x: 0,
        opacity: 1,
        transition: { type: "fade", duration: 1 },
      });
      animationZ.start({
        y: 0,
        opacity: 1,
        transition: { type: "ease-out", duration: 1 },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: { ease: "easeInOut", duration: 2 },
      });
    }
    if (!inView) {
      animationX.start({ opacity: 0, x: "-30px" });
      animationY.start({ opacity: 0, x: "30px" });
      animationZ.start({ opacity: 0, y: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-screen bg-white">
      <div className="w-full h-full rounded-tl-[100px] relative bg-[#F9F9FC]">
        <div className="pt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              data-scroll
              data-scroll-speed="-6"
              data-scroll-direction="horizontal"
              className="pb-2 text-3xl left-[5%]"
            >
              <h2>Our Business</h2>
            </div>
            <p className="py-2">
              The NMG Group is made up of three core business
            </p>
          </div>
          <div className="w-[90%] md:w-[70%] md:mx-auto flex justify-between items-center gap-2 md:gap-4 pt-6">
            <motion.div
              animate={animationX}
              className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104.289"
                  height="92.851"
                  viewBox="0 0 104.289 92.851"
                >
                  <g
                    id="Group_20"
                    data-name="Group 20"
                    transform="translate(-209.5 -1131)"
                  >
                    <rect
                      id="Rectangle_24"
                      data-name="Rectangle 24"
                      width="75"
                      height="75"
                      rx="12"
                      transform="translate(238.789 1131)"
                      fill="#f6ebec"
                    />
                    <g
                      id="Group_16"
                      data-name="Group 16"
                      transform="translate(-196.524 751.925)"
                    >
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M417.891,494.208v-2.757a13.962,13.962,0,0,1,13.962-13.962h7.366a14.078,14.078,0,0,1,11.957,6.75"
                        transform="translate(-3.81 -33.838)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M436.55,477.489l5.844,10.505,5.844-10.505"
                        transform="translate(-10.668 -33.837)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <rect
                        id="Rectangle_30"
                        data-name="Rectangle 30"
                        width="16.955"
                        height="20.669"
                        rx="8.478"
                        transform="translate(423.248 422.982)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M432.489,455.675s3.23.454,5.329-1.484c0,0,1.94,2.07,6.475,2.533"
                        transform="translate(-9.176 -25.274)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M466.306,509.547v-2.756a13.962,13.962,0,0,1,13.962-13.962h7.366A13.962,13.962,0,0,1,501.6,506.791v2.756"
                        transform="translate(-21.605 -39.476)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M484.965,492.828l5.844,10.505,5.844-10.505"
                        transform="translate(-28.463 -39.475)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <rect
                        id="Rectangle_31"
                        data-name="Rectangle 31"
                        width="16.955"
                        height="20.669"
                        rx="8.478"
                        transform="translate(453.868 432.684)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M480.9,471.014s3.23.455,5.329-1.483c0,0,1.94,2.069,6.475,2.532"
                        transform="translate(-26.971 -30.913)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_39"
                        data-name="Path 39"
                        d="M444.15,513.979H407.524V503.924h31.935"
                        transform="translate(0 -43.553)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <motion.path
                        animate={pathAnimation}
                        id="Path_40"
                        data-name="Path 40"
                        d="M439.429,410.939h-7.942v6.054l-7.98-6.054h-2.395a5.083,5.083,0,0,1-5.084-5.084V390.509a5.083,5.083,0,0,1,5.084-5.083h33.432a5.083,5.083,0,0,1,5.084,5.083v.07"
                        transform="translate(-3.126)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <motion.path
                        animate={pathAnimation}
                        id="Path_41"
                        data-name="Path 41"
                        d="M500.161,425.919H477.1v6.055l-7.98-6.055H466.73a5.083,5.083,0,0,1-5.084-5.084V405.489a5.083,5.083,0,0,1,5.084-5.083h33.431a5.083,5.083,0,0,1,5.084,5.083v15.346A5.084,5.084,0,0,1,500.161,425.919Z"
                        transform="translate(-19.892 -5.506)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_42"
                        data-name="Path 42"
                        d="M475.814,421.766l8.9-5.743,5.743,2.641,8.874-6.678"
                        transform="translate(-25.1 -9.173)"
                        fill="none"
                        stroke="#1d1d1b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
                  NMG Consulting
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  A specialist consultency focused on the insurance
                </p>
              </div>
              <div>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </div>
            </motion.div>
            <motion.div
              animate={animationZ}
              className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="93.077"
                  height="80"
                  viewBox="0 0 93.077 80"
                >
                  <g
                    id="Group_18"
                    data-name="Group 18"
                    transform="translate(-593.711 -1126)"
                  >
                    <rect
                      id="Rectangle_24"
                      data-name="Rectangle 24"
                      width="80"
                      height="80"
                      rx="38"
                      transform="translate(606.789 1126)"
                      fill="#f6ebec"
                    />
                    <g
                      id="Group_17"
                      data-name="Group 17"
                      transform="translate(0 2)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M223.423,1131.986v47.339h65.252"
                        transform="translate(371.789 13)"
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <motion.path
                        animate={pathAnimation}
                        id="Path_32"
                        data-name="Path 32"
                        d="M238.136,1163.332l19.831-14.074,6.4,7.677,18.639-13.5"
                        transform="translate(371.789 13)"
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <g
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        transform="translate(651 1148)"
                        stroke="#f6ebec"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
                        <circle cx="6.5" cy="6.5" r="8.5" fill="none" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
                  NMG Benefilts
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center md:text-xl">
                  A Employee benefilt consulting and administration.
                </p>
              </div>
              <div>
                <button className="pb-4 text-red-600 underline">
                  Read More
                </button>
              </div>
            </motion.div>
            <motion.div
              animate={animationY}
              className="bg-white w-[130px] md:w-[300px] h-[350px] rounded-xl shadow-xl shadow-gray-300 flex flex-col justify-center items-center p-4"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="139.075"
                  height="130.396"
                  viewBox="0 0 139.075 130.396"
                >
                  <g
                    id="Group_19"
                    data-name="Group 19"
                    transform="translate(-954.608 -1087.094)"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M42.6,24.349a16,16,0,0,1,27.792,0l28.946,50.72A16,16,0,0,1,85.446,99H27.554a16,16,0,0,1-13.9-23.931Z"
                      transform="translate(954.608 1123.884) rotate(-19)"
                      fill="#f6ebec"
                    />
                    <rect
                      id="Rectangle_25"
                      data-name="Rectangle 25"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(1011 1191)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <rect
                      id="Rectangle_29"
                      data-name="Rectangle 29"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(985 1191)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <rect
                      id="Rectangle_26"
                      data-name="Rectangle 26"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(1011 1176)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <rect
                      id="Rectangle_27"
                      data-name="Rectangle 27"
                      width="21"
                      height="10"
                      rx="2"
                      transform="translate(1011 1161)"
                      fill="none"
                      stroke="#000"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <motion.circle
                      animate={pathAnimation}
                      id="Ellipse_8"
                      data-name="Ellipse 8"
                      cx="15.5"
                      cy="15.5"
                      r="15.5"
                      transform="translate(971 1151)"
                      fill="none"
                      stroke="#000"
                      stroke-width="3"
                    />
                    <text
                      id="_"
                      data-name="$"
                      transform="translate(987 1173)"
                      font-size="20"
                      font-family="SegoeUI, Segoe UI"
                    >
                      <tspan x="-5.391" y="0">
                        $
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="pt-6 pb-2 text-sm text-center md:text-xl">
                  NMG Capital
                </h1>
              </div>
              <div>
                <p className="pb-4 text-sm text-center">
                  A private equity business investing in financial services
                </p>
              </div>
              <div>
                <button className="pb-2 text-red-600 underline">
                  Read More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={animationX}
          className="absolute top-[-40px] left-[180px] md:top[-40px] md:left-[700px] lg:top-[-40px] lg:left-[700px]"
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
          animate={animationZ}
          className="absolute top-[20px] left-[235px] md:top-[20px] md:left-[755px] lg:top-[20px] lg:left-[755px]"
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
          animate={animationY}
          className="absolute top-[-50px] left-[180px] md:top-[-50px] md:left-[700px] lg:top-[-50px] lg:left-[700px]"
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
        <div className="w-[90%] mx-auto h-[220px] bg-[#C61526] rounded-xl text-white mt-8 relative">
          <div className="absolute z-40 flex flex-col items-center justify-center px-4 text-center md:pl-[400px] pt-[20px] md:pt-[50px]">
            <div className="pb-4 text-2xl">
              <h1>Celebrating 25 years of NMG</h1>
            </div>
            <div className="pb-4">
              <p>
                This year NMG celebrates 25 years in business. There is much we
                can be proud of, a lot of achievements over the last
                quarter-century.
              </p>
            </div>
            <div className="p-2 border-2 border-wide rounded-xl">
              <button>More Info</button>
            </div>
          </div>
          <div className="absolute top-0 right-[500px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
            ></svg>
          </div>
          <div className="absolute top-20 right-[40px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
            >
              <circle
                id="Ellipse_10"
                data-name="Ellipse 10"
                cx="104"
                cy="104"
                r="104"
                fill="#fff"
                opacity="0.1"
              />
            </svg>
          </div>
          <div className="absolute top-[-10px] left-[10px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="69"
              viewBox="0 0 69 69"
            >
              <circle
                id="Ellipse_11"
                data-name="Ellipse 11"
                cx="34.5"
                cy="34.5"
                r="34.5"
                fill="#fff"
                opacity="0.1"
              />
            </svg>
          </div>
          <div className="absolute top-[10px] left-[10px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="234.363"
              height="171.24"
              viewBox="0 0 234.363 171.24"
            >
              <g
                id="Group_23"
                data-name="Group 23"
                transform="translate(-113.706 -1648.591)"
              >
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M138.738,342.766a8.67,8.67,0,0,1,1.664,7.041c7.716-1.1,12.481-2.769,19.34-5.646a16.573,16.573,0,0,0-1.9-8.7C151.365,340.11,146.425,341.464,138.738,342.766Z"
                  transform="translate(35.199 1439.725)"
                  fill="#ffaf00"
                />
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M270.748,420.542c1.99.826,3.64.433,6.32-.3-1.829-5.783-2.042-12.469-1.566-20.234a9.2,9.2,0,0,1-5.966-.61C268.544,407.578,268.706,412.244,270.748,420.542Z"
                  transform="translate(-155.239 1390.996)"
                  fill="#ffe853"
                />
                <path
                  id="Path_65"
                  data-name="Path 65"
                  d="M325.521,336.407a9.121,9.121,0,0,1-3.515-6.749c-7.584,3.114-12.009,6.052-18.259,10.753a17.444,17.444,0,0,0,4.186,8.376C313.335,342.381,318.021,339.721,325.521,336.407Z"
                  transform="translate(-89.347 1318.933)"
                  fill="#00d339"
                />
                <path
                  id="Path_73"
                  data-name="Path 73"
                  d="M321.737,335.234a7.535,7.535,0,0,1-2.9-5.576,60.781,60.781,0,0,0-15.085,8.884,14.412,14.412,0,0,0,3.459,6.92C311.669,340.169,315.54,337.972,321.737,335.234Z"
                  transform="matrix(-0.259, 0.966, -0.966, -0.259, 745.11, 1594.379)"
                  fill="#00d339"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M549.63,319.407a6.857,6.857,0,0,1,1.08,5.614,55.31,55.31,0,0,0,15.45-3.815,13.1,13.1,0,0,0-1.212-6.928C559.683,317.729,555.74,318.635,549.63,319.407Z"
                  transform="translate(-472.268 1736.131) rotate(-30)"
                  fill="#ff41aa"
                />
                <path
                  id="Path_71"
                  data-name="Path 71"
                  d="M214,398.109c1.2-7.554,2.263-11.365,6.281-16.463-2.754-1.285-4.263-2.5-4.93-4.352-4.71,5.212-6.609,9.768-8.587,17.674A15.059,15.059,0,0,0,214,398.109Z"
                  transform="translate(42.801 1399.893)"
                  fill="#82c4f2"
                />
              </g>
            </svg>
          </div>
          <div className="absolute top-[10px] right-[20px] z-30 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="234.363"
              height="171.24"
              viewBox="0 0 234.363 171.24"
            >
              <g
                id="Group_24"
                data-name="Group 24"
                transform="translate(-113.706 -1648.591)"
              >
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M138.738,342.766a8.67,8.67,0,0,1,1.664,7.041c7.716-1.1,12.481-2.769,19.34-5.646a16.573,16.573,0,0,0-1.9-8.7C151.365,340.11,146.425,341.464,138.738,342.766Z"
                  transform="translate(75.663 1458.56)"
                  fill="#ffaf00"
                />
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M270.748,420.542c1.99.826,3.64.433,6.32-.3-1.829-5.783-2.042-12.469-1.566-20.234a9.2,9.2,0,0,1-5.966-.61C268.544,407.578,268.706,412.244,270.748,420.542Z"
                  transform="translate(-155.239 1390.996)"
                  fill="#ffe853"
                />
                <path
                  id="Path_65"
                  data-name="Path 65"
                  d="M325.521,336.407a9.121,9.121,0,0,1-3.515-6.749c-7.584,3.114-12.009,6.052-18.259,10.753a17.444,17.444,0,0,0,4.186,8.376C313.335,342.381,318.021,339.721,325.521,336.407Z"
                  transform="translate(-89.347 1318.933)"
                  fill="#00d339"
                />
                <path
                  id="Path_73"
                  data-name="Path 73"
                  d="M321.737,335.234a7.535,7.535,0,0,1-2.9-5.576,60.781,60.781,0,0,0-15.085,8.884,14.412,14.412,0,0,0,3.459,6.92C311.669,340.169,315.54,337.972,321.737,335.234Z"
                  transform="matrix(-0.259, 0.966, -0.966, -0.259, 745.11, 1594.379)"
                  fill="#00d339"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M549.63,319.407a6.857,6.857,0,0,1,1.08,5.614,55.31,55.31,0,0,0,15.45-3.815,13.1,13.1,0,0,0-1.212-6.928C559.683,317.729,555.74,318.635,549.63,319.407Z"
                  transform="translate(-472.268 1736.131) rotate(-30)"
                  fill="#ff41aa"
                />
                <path
                  id="Path_71"
                  data-name="Path 71"
                  d="M214,398.109c1.2-7.554,2.263-11.365,6.281-16.463-2.754-1.285-4.263-2.5-4.93-4.352-4.71,5.212-6.609,9.768-8.587,17.674A15.059,15.059,0,0,0,214,398.109Z"
                  transform="translate(47.801 1344.683)"
                  fill="#82c4f2"
                />
              </g>
            </svg>
          </div>

          <div className="absolute top-[30px] right-[20px] z-30 opacity-50">
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
          <div className="absolute top-[10px] right-[200px] z-30 opacity-50">
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
        </div>
      </div>
    </div>
  );
};

export default Business;
