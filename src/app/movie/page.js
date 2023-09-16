import React from "react";
import SwiperMovie from "../../components/movie/SwiperMovie";
import NowPlaying from "../../components/movie/NowPlaying";
import { AuthRequiredError } from "@/lib/exceptions";

export const metadata = {
  title: "Movie",
  description: "movie list",
};

const getUpComingData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new AuthRequiredError();
  }

  return res.json();
};
const getPopularData = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new AuthRequiredError();
  }

  return res.json();
};

const Movie = async ({ searchParams }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const upComingData = await getUpComingData();
  const popularData = await getPopularData(page);
  // searchPar
  // console.log(popularData);
  return (
    <>
      <h2 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-amber-500 md:text-4xl dark:text-gray-300 dark:bg-amber-800 bg-slate-800 py-2">
        Movie
      </h2>
      <SwiperMovie upComing={upComingData.results} />
      <NowPlaying popular={popularData} pageValue={page} />
    </>
  );
};

export default Movie;
