import { AuthRequiredError } from "@/lib/exceptions";
import Image from "next/image";


export async function generateMetadata({ params }) {
  // read route params
  const movie = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?language=en-US&api_key=${process.env.API_KEY}`).then((res) => res.json())
 
 
  return {
    title: movie.name,
    description: movie.overview,
  }
}

const getDataDetails = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new AuthRequiredError();
  }

  return res.json();
};

const page = async ({params}) => {
  const tvShow = await getDataDetails(params.id);
  // console.log(tvShow);
  return (
    <main>
    <section className="flex justify-around flex-wrap py-5">
      <div className="max-w-sm">
      <Image
            className=""
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${tvShow.poster_path}`}
            alt={tvShow.name}
            width={405}
            height={200}
          />
      </div>
      <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
        <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
          {tvShow.name}
        </h1>
        <p className="my-4">{tvShow.overview}
         {tvShow.genres ? ( 
          <p className="my-7 flex flex-wrap gap-2">
             {tvShow.genres.map((genre) => (
              <span
                className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </p>
        ) : (
          ""
        )} 
    </p>
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="ml-2 text-gray-900 dark:text-white">
            {tvShow.vote_average}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-gray-900 dark:text-white">
            {tvShow.vote_count} reviews
          </span>
        </div>

        <p className="my-4">
          <span className="mr-2 font-bold">Runtime:</span>
          <span>{tvShow.episode_run_time} min.</span>
        </p>

        <p className="my-4">
          <span className="mr-2 font-bold">Popularity:</span>
          <span>{tvShow.popularity}</span>
        </p>

        <p className="my-4">
          <span className="mr-2 font-bold">Number Of Seasons:</span>
          <span>{tvShow.number_of_seasons}</span>
        </p>
        <p className="my-4">
          <span className="mr-2 font-bold">Number Of Episodes:</span>
          <span>{tvShow.number_of_episodes}</span>
        </p>
        <p className="my-4">
          <span className="mr-2 font-bold">First Air Date:</span>
          <span>{tvShow.first_air_date}</span>
        </p>
        <p className="my-4">
          <span className="mr-2 font-bold">Last Air Date:</span>
          <span>{tvShow.last_air_date}</span>
        </p>

        {/* <p className="my-4">
          <span className="mr-2 font-bold">Homepage:</span>
          <a
            href={`https://www.imdb.com/title/${'tvShow.imdb_id'}`}
            target="_blank"
            rel="noreferrer"
          >
            {'tvShow.imdb_id'}
          </a>
        </p> */}
      </div>
    </section>
  </main>
  )
}

export default page