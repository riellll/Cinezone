'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
<section className="relative h-screen flex flex-col justify-center align-center text-center space-y-4 bg-center">
    <div>
      <h2 className='p-5'>{error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='bg-black text-white py-2 px-5'
      >
        Try again
      </button>
    </div>
    </section>
  )
}