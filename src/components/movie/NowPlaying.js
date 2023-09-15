import Link from "next/link";
import Image from "next/image";
import errorPoster from "../../../public/error-poster1.png";
import MoviePagination from "./MoviePagination";

const NowPlaying = ({ popular, pageValue }) => {
  return (
    <>
      <div className="xl:max-w-screen-xl xl:mx-auto sm:px-4 py-20">
      <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-orange-400">POPULAR</span> MOVIE</h1>
        <div className="grid grid-cols-1 max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5 items-center justify-between mx-auto p-4 min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:px-5 min-[320px]:mb-10 min-[320px]:mt-10">
          {popular.results.map((item) => {
            const poster = item.poster_path
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
              : errorPoster;
            return (
              <div
                className="max-w-full min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={item.id}
              >
                <Link href={`/movie/${item.id}`}>
                  <Image
                    className="rounded-t-lg w-full h-auto"
                    src={poster}
                    alt=""
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="sm:p-5 min-[320px]:p-2">
                  <Link href="#">
                    <h5 className="mb-2 sm:text-2xl font-bold text-gray-900 dark:text-gray-300 min-[320px]:text-md">
                      {item.title}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.release_date
                      ? item.release_date
                      : item.first_air_date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center min-[320px]:px-9 min-[320px]:mb-10 min-[320px]:mt-10">
          <MoviePagination popularPage={[popular.total_pages, pageValue]} />
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
