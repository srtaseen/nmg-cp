import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-[#F9F9FC]">
      <div className="w-full h-full bg-white rounded-tl-[100px] rounded-br-[100px] pt-20 mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 text-lg justify-center place-content-between">
          <div className="flex flex-col gap-4">
            <svg
              id="nmg_logo"
              data-name="nmg logo"
              xmlns="http://www.w3.org/2000/svg"
              width="104.688"
              height="26.418"
              viewBox="0 0 104.688 26.418"
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(35.591 0.208)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M132.1,1.813A6.35,6.35,0,0,0,128.524.8a7.093,7.093,0,0,0-3.634.923,6.408,6.408,0,0,0-2.025,1.757V1.187H119.5V18.908h3.366V8.573a4.793,4.793,0,0,1,.6-2.383A4.326,4.326,0,0,1,125.1,4.553a4.793,4.793,0,0,1,2.383-.6,4.374,4.374,0,0,1,3.276,1.31A4.608,4.608,0,0,1,132.039,8.6V18.938h3.4V7.918a7.029,7.029,0,0,0-.893-3.455A7.2,7.2,0,0,0,132.1,1.813Z"
                  transform="translate(-119.5 -0.77)"
                  fill="#606060"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M212.376,1.564A7.347,7.347,0,0,0,208.891.73a7.025,7.025,0,0,0-3.425.834A7.112,7.112,0,0,0,202.9,3.887c0,.03-.03.03-.03.06,0-.03-.03-.06-.03-.089a6.371,6.371,0,0,0-2.383-2.323A7.13,7.13,0,0,0,197.1.7a6.865,6.865,0,0,0-3.425.834,6.238,6.238,0,0,0-1.906,1.608V1.117H188.4V18.838h3.366V8.086a4.008,4.008,0,0,1,2.174-3.693,4.472,4.472,0,0,1,2.2-.536,4.309,4.309,0,0,1,3.038,1.132A4.1,4.1,0,0,1,200.4,8.116V18.838h3.366V8.086a4.008,4.008,0,0,1,2.174-3.693,4.588,4.588,0,0,1,2.234-.536,4.286,4.286,0,0,1,3.008,1.132,4.1,4.1,0,0,1,1.221,3.127V18.838h3.4V7.461a6.516,6.516,0,0,0-.923-3.574A6.668,6.668,0,0,0,212.376,1.564Z"
                  transform="translate(-167.879 -0.7)"
                  fill="#606060"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M306.075,1.187V3.54a6.68,6.68,0,0,0-2.264-1.906A8.129,8.129,0,0,0,300.118.8a8.262,8.262,0,0,0-4.348,1.162,8.446,8.446,0,0,0-3.038,3.187A9.117,9.117,0,0,0,291.6,9.675a9.429,9.429,0,0,0,1.132,4.587,8.222,8.222,0,0,0,7.386,4.348,7.723,7.723,0,0,0,3.663-.834,6.692,6.692,0,0,0,2.323-1.936v2.353a5.027,5.027,0,0,1-1.579,3.872,6.245,6.245,0,0,1-4.319,1.43,8.089,8.089,0,0,1-3.544-.715,7.233,7.233,0,0,1-2.561-2.115l-2.174,2.2a8.231,8.231,0,0,0,3.366,2.829,10.84,10.84,0,0,0,4.825,1.013A10.717,10.717,0,0,0,305,25.639a8.145,8.145,0,0,0,3.276-2.978,8.358,8.358,0,0,0,1.162-4.438V1.187Zm-2.383,13.551a5.694,5.694,0,0,1-2.889.715,6.037,6.037,0,0,1-2.978-.715,5.292,5.292,0,0,1-2.025-2.025,6.118,6.118,0,0,1-.715-2.978,6.118,6.118,0,0,1,.715-2.978,5.426,5.426,0,0,1,2-2.025,5.843,5.843,0,0,1,2.949-.715,5.73,5.73,0,0,1,2.919.715A5.074,5.074,0,0,1,305.6,6.757a6.4,6.4,0,0,1,.685,3.008,6.491,6.491,0,0,1-.685,3.008A4.843,4.843,0,0,1,303.692,14.739Z"
                  transform="translate(-240.343 -0.77)"
                  fill="#606060"
                />
              </g>
              <rect
                id="Rectangle_15"
                data-name="Rectangle 15"
                width="26.418"
                height="26.418"
                fill="#c61b26"
              />
              <path
                id="Path_4"
                data-name="Path 4"
                d="M39.876,17.41l1.906-4.11H38Z"
                transform="translate(-26.682 -9.339)"
                fill="#fff"
              />
              <path
                id="Path_5"
                data-name="Path 5"
                d="M22.129,22.129,20.581,17.9,17.9,20.581Z"
                transform="translate(-12.569 -12.569)"
                fill="#fff"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M17.41,39.876,13.3,38v3.782Z"
                transform="translate(-9.339 -26.682)"
                fill="#fff"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M22.129,56.6,17.9,58.149l2.681,2.681Z"
                transform="translate(-12.569 -39.743)"
                fill="#fff"
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M39.876,61.6,38,65.71h3.782Z"
                transform="translate(-26.682 -43.253)"
                fill="#fff"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M56.6,56.6l1.549,4.229,2.681-2.681Z"
                transform="translate(-39.743 -39.743)"
                fill="#fff"
              />
              <path
                id="Path_10"
                data-name="Path 10"
                d="M61.6,39.876l4.11,1.906V38Z"
                transform="translate(-43.253 -26.682)"
                fill="#fff"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M56.6,22.129l4.229-1.549L58.149,17.9Z"
                transform="translate(-39.743 -12.569)"
                fill="#fff"
              />
            </svg>
            <p className="pt-4 hidden md:flex">
              The NMG Group is a global advisory and intermediary firm focused
              exclusively on the financial services sector.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 ml-6 md:ml-6">
            <ul>
              <Link href="/">
                <li className="cursor-pointer">About NMG</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Key People</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer hidden md:flex">
                  Insights Events & Media
                </li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Core Values</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Investors</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Alumni</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ul>
              <Link href="/">
                <li className="cursor-pointer">Business</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Community</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Careers</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div>
              <FaFacebookF
                size={40}
                className="p-2 transition-all ease-out bg-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110"
              />
            </div>
            <div>
              <AiOutlineTwitter
                size={40}
                className="p-2 transition-all ease-out bg-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110"
              />
            </div>
            <div>
              <FaLinkedinIn
                size={40}
                className="p-2 transition-all ease-out bg-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
