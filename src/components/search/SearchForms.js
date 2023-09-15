"use client"
import { usePathname, useRouter } from "next/navigation";

const SearchForms = () => {
    
  const pathname = usePathname();
  const router = useRouter()
 const searchSubmit = async (e) => {
    e.preventDefault()
    if(!e.target[0].value) {
      return
    }
    console.log(e.target[0].value)
    router.push(`/search/${e.target[0].value}`)
    e.target.reset()
  }
  return (
    <form onSubmit={searchSubmit} className="flex w-full">
          <div className="relative md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m17 21-2-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
              <span className="sr-only">Search icon</span>
            </div>
           
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-l-lg border border-gray-300 bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 font-medium text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Search
          </button>
          </form>
  )
}

export default SearchForms