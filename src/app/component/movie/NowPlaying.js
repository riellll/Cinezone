import Link from "next/link";
import Image from "next/image";

const NowPlaying = ({popular}) => {
  return (
    <>
      <div className="grid grid-cols-1 max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-between mx-auto p-4">
        <h1 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center font-semibold text-2xl subpixel-antialiased py-2 mb-5 shadow-lg shadow-blue-500/50 border-4 border-blue-800 bg-slate-200">
          POPULAR MOVIE
        </h1>
       {popular.map((item) => {
        return (
          <div className="max-w-full min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
          <Link href={`/movie/${item.id}`}>
            <Image
              className="rounded-t-lg"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
              alt=""
              width={305}
              height={100}
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
        )
       })}
       
      </div>
    </>
  );
};

export default NowPlaying;
