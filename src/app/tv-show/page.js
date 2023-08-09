import AiringToday from "../component/tv/AiringToday"
import SwiperTV from "../component/tv/SwiperTV"
import { AuthRequiredError } from "@/lib/exceptions";
export const metadata = {
  title: 'TV-Show',
  description: 'tv show list',
}

const getOnTheAirData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=2&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new AuthRequiredError();
  }

  return res.json();
};
const getPopularData = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new AuthRequiredError();
  }

  return res.json();
};

const page = async ({searchParams}) => {
  const page =
  typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const onTheAirData = await getOnTheAirData();
  const popularData = await getPopularData(page);
  // console.log(onTheAirData);
  return (
    <>
    <h1 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-amber-500 font-semibold text-3xl subpixel-antialiased bg-gray-800 py-2">
    TV Show
      </h1>
      <SwiperTV onTheAir={onTheAirData.results}/>
      <AiringToday popular={popularData} pageValue={page}/>
      </>
  )
}

export default page