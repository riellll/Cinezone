"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import NowPlaying from "./NowPlaying";

const SwiperMovie = ({ upComing }) => {
  return (
    <>
      <div className="xl:max-w-screen-xl xl:mx-auto sm:px-4 py-20">
      <h1 class="mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-orange-400">UP COMING</span> MOVIE</h1>
        <div>
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
          {upComing.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href={`/movie/${item.id}`}>
                  <Image
                    className="rounded-t-lg w-full h-auto sm:px-0 min-[320px]:gap-10 min-[320px]:px-9 min-[320px]:mb-14 min-[320px]:mt-10"
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
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
      </div>
    </>
  );
};

export default SwiperMovie;
