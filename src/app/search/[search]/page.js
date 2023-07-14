import All_Search from "@/app/component/search/All_Search"

export async function generateMetadata({ params }) {
  // read route params
  const search = params.search
 
 
  return {
    title: search.split('%20').join(' '),
    description: 'asdasdasd'
  }
}

const getData = async (search) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new Error("Error to fetch Data");
  }

  return res.json();
};



const Search = async ({params}) => {
    const data = await getData(params.search);
  // console.log(params.search);

  return (
    <All_Search searchData={data.results} searchID={params.search}/>
  )
}

export default Search