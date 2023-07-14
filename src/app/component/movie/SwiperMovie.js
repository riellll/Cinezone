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
        <h1 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center font-semibold text-2xl subpixel-antialiased py-2 mb-5 shadow-lg shadow-blue-500/50 border-4 border-blue-800 bg-slate-200">
          UP COMING MOVIE
        </h1>
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
                    className="rounded-t-lg"
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                    width={200}
                    height={100}
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

export default SwiperMovie;
