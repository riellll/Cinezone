"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import errorPoster from '../../../../public/error-poster1.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

const SwiperTV = ({onTheAir}) => {
  return (
    <>
 
    <h1 className="col-span-4 sm:col-span-2 mt-20 mx-auto max-w-screen-xl md:col-span-3 lg:col-span-4 text-center font-semibold text-2xl subpixel-antialiased py-2 mb-5 shadow-lg shadow-blue-500/50 border-4 border-blue-800 bg-slate-200">
    ON THE AIR
      </h1>
    <div className="xl:max-w-screen-xl xl:mx-auto sm:px-4 pb-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
           {onTheAir.map((item) => {
            const poster = item.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` : errorPoster
            return (
              <SwiperSlide key={item.id}>
                <Link href={`/tv-show/${item.id}`}>
                  <Image
                    className="rounded-t-lg w-full h-auto"
                    src={poster}
                    alt=""
                    width={500}
                    height={500}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
      </div>
    </>
  );
};

export default SwiperTV;
