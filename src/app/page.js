import All_Trending from "./component/home/All_Trending";

export default function Home({searchParams}) {
/*   const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1 */
  // console.log(page);
  return (
    <>
      <All_Trending />
    </>
  );
}
