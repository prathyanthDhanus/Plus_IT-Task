import React from 'react'

const Loader = () => {
  return (
    

    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-gray-200 bg-opacity-50">
    <div className="w-full gap-x-2 flex justify-center items-center">
      <div
        className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
      ></div>
      <div
        className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
      ></div>
      <div
        className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
      ></div>
    </div>
  </div>
      
  )
}

export default Loader