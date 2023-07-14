import React from 'react'
import SwiperMovie from '../component/movie/SwiperMovie'
import NowPlaying from '../component/movie/NowPlaying'

export const metadata = {
  title: 'Movie',
  description: 'movie list',
}

const getUpComingData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new Error("Error to fetch Data");
  }

  return res.json();
};
const getPopularData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new Error("Error to fetch Data");
  }

  return res.json();
};

const Movie = async () => {
  const upComingData = await getUpComingData();
  const popularData = await getPopularData();
  // console.log(upComingData);
  return (
    <>
    <h1 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-amber-500 font-semibold text-3xl subpixel-antialiased bg-gray-800 py-2">
    Movie
      </h1>
    <SwiperMovie upComing={upComingData.results}/>
    <NowPlaying popular={popularData.results}/>
    </>
  )
}

export default Movie