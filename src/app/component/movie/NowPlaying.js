import Link from "next/link";
import Image from "next/image";
import errorPoster from '../../../../public/error-poster1.png';
import MoviePagination from "./MoviePagination";

const NowPlaying = ({ popular, pageValue }) => {
  return (
    <>
        <h1 className="col-span-4 sm:col-span-2 mx-auto max-w-screen-xl md:col-span-3 lg:col-span-4 text-center font-semibold text-2xl subpixel-antialiased py-2 mb-5 shadow-lg shadow-blue-500/50 border-4 border-blue-800 bg-slate-200">
          POPULAR MOVIE
        </h1>
      <div className="grid grid-cols-1 max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-between mx-auto p-4">
        {popular.results.map((item) => {
          const poster = item.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` : errorPoster
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
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
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
        <div className="flex justify-center">
          <MoviePagination popularPage={[popular.total_pages, pageValue]}/>
        </div>
    </>
  );
};

export default NowPlaying;
