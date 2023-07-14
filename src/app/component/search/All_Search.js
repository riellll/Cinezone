import Image from "next/image";
import Link from "next/link";
import error from "../../../../public/error-poster.png"
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

const All_Search = ({ searchData, searchID }) => {
  return (
    <>
     <h1 className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-amber-500 font-semibold text-3xl subpixel-antialiased bg-gray-800 py-2">
        Search: <span className="text-white">{searchID.split('%20').join(' ')}</span>
      </h1>
    <div className="grid grid-cols-1 max-w-screen-xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-between mx-auto p-4">
     
      {searchData?.map((item) => {
        const path = item.title ? `/movie/${item.id}` : `/tv-show/${item.id}` 
        const poster = item.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` : error
        return (
          <div className="max-w-full min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
            <Link href={path}>
              <Image
                className="rounded-t-lg"
                src={poster}
                alt=""
                width={305}
                height={100}
              />
            </Link>
            <div className="p-5">
              <Link href={path}>
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title
                    ? item.title
                    : item.name}
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

export default All_Search;
