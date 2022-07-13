import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

const TeamSlider = () => {
  return (
    <Carousel className="py-10 my-10 text-white bg-gray-500 lg:py-20">
      <CarouselItem index={0}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4">
            <img
              src="/assets/team/Geoff-Baars-e1405584015351.png"
              alt="Geoff"
              className="w-[100px] h-[100px] "
            />
          </div>
          <h1 className="pb-4 text-3xl">Geoff Baars</h1>
          <h2 className="pb-4 text-xl">Executive Director, NMG Group</h2>
          <p>
            Geoff is one of the founders of NMG, and his current role is
            internally focused, dealing with NMG’s key executives and leaders in
            all the businesses of the Group, as well as with shareholders and
            directors.
          </p>
        </div>
      </CarouselItem>
      <CarouselItem index={1}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4 ">
            <img
              src="/assets/team/Mark-Prichard-e1405584354538.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
          </div>
          <h1 className="pb-4 text-3xl">Mark Prichard</h1>
          <h2 className="pb-4 text-xl">CEO, NMG Consulting</h2>
          <p>
            Mark is one of the founders of NMG, and his current role is
            internally focused, dealing with NMG’s key executives and leaders in
            all the businesses of the Group, as well as with shareholders and
            directors.
          </p>
        </div>
      </CarouselItem>
      <CarouselItem index={2}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4 ">
            <img
              src="/assets/team/David-Burns-2.2.png"
              alt="Geoff"
              className="w-[100px] h-[100px]"
            />
          </div>
          <h1 className="pb-4 text-3xl">David Burns</h1>
          <h2 className="pb-4 text-xl">Director, NMG Group</h2>
          <p>
            David is one of the founders of NMG, and his current role is
            internally focused, dealing with NMG’s key executives and leaders in
            all the businesses of the Group, as well as with shareholders and
            directors.
          </p>
        </div>
      </CarouselItem>
      <CarouselItem index={3}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4 ">
            <img
              src="/assets/team/Hamish_Worsley-2.png"
              alt="Geoff"
              className="w-[100px] h-[100px] "
            />
          </div>
          <h1 className="pb-4 text-3xl">Hamish Worsly</h1>
          <h2 className="pb-4 text-xl">Partner, NMG Group</h2>
          <p>
            Hamish is one of the founders of NMG, and his current role is
            internally focused, dealing with NMG’s key executives and leaders in
            all the businesses of the Group, as well as with shareholders and
            directors.
          </p>
        </div>
      </CarouselItem>
      <CarouselItem index={4}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4 ">
            <img
              src="/assets/team/Andrew-Baker.png"
              alt="Geoff"
              className="w-[100px] h-[100px] "
            />
          </div>
          <h1 className="pb-4 text-3xl">Andrew Baker</h1>
          <h2 className="pb-4 text-xl">Partner, NMG Consulting</h2>
          <p>
            Andrew is one of the founders of NMG, and his current role is
            internally focused, dealing with NMG’s key executives and leaders in
            all the businesses of the Group, as well as with shareholders and
            directors.
          </p>
        </div>
      </CarouselItem>
    </Carousel>
  );
};

export default TeamSlider;
