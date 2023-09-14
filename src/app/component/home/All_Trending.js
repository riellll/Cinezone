import Image from "next/image";
import Link from "next/link";
import HomeLoading from "./loading";
// import { Suspense } from "react";
// import Pagination from "./Pagination";

const getData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res) {
    throw new Error("Error to fetch Data");
  }

  return res.json();
};

// {
//   adult: false,
//   backdrop_path: '/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
//   id: 447365,
//   title: 'Guardians of the Galaxy Vol. 3',
//   original_language: 'en',
//   original_title: 'Guardians of the Galaxy Vol. 3',
//   overview: 'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
//   poster_path: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
//   media_type: 'movie',
//   genre_ids: [Array],
//   popularity: 3135.553,
//   release_date: '2023-05-03',
//   video: false,
//   vote_average: 8.147,
//   vote_count: 2617
// },

const All_Trending = async () => {
  const data = await getData();
 /*  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1; */
  // console.log(searchPage);
  return (
    <>
      <h1 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-amber-500 md:text-4xl dark:text-white bg-gray-800 py-2">
        All Trending
      </h1>
      <div className="grid grid-cols-1 max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-between mx-auto p-4 min-[320px]:gap-10 min-[320px]:px-9 min-[320px]:mb-10 min-[320px]:mt-10">
        {!data && <HomeLoading />}

        {data.results.map((item) => {
          const path = item.title ? `/movie/${item.id}` : `/tv-show/${item.id}`;
          return (
            <div
              className="max-w-full min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <Link href={path}>
                <Image
                  className="rounded-t-lg w-full h-auto"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
              <div className="p-5">
                <Link href={path}>
                  <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title ? item.title : item.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.release_date ? item.release_date : item.first_air_date}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default All_Trending;
