import React from 'react'
import javascript from "../assets/image/javascript.png"
import Cp from "../assets/image/Cp.png"
import css from "../assets/image/css.png"
import dsa from "../assets/image/dsa.jpg"
import github from "../assets/image/github.png"
import html from "../assets/image/html.png"
import react from "../assets/image/react.png"
import tailwind from "../assets/image/tailwind.png"


function Experience() {

  const techlist=[
    {
      id:1,
      src:html,
      title:"HTML",
      style: "shadow-orange-500",
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style: "shadow-blue-500",
    },
    {
      id:3,
      src:javascript,
      title:"Javascript",
      style: "shadow-yellow-500",
    },
    {
      id:4,
      src:react,
      title:"React",
      style: "shadow-blue-600",
    },
    {
      id:5,
      src:tailwind,
      title:"Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id:6,
      src:github,
      title:"GitHub",
      style: "shadow-gray-400",
    },
  ]
  return (
    <div  className=' md:h-screen w-full bg-[#FDF7EF]' name="Experience">
      <div className=' flex flex-col w-full h-full mx-auto text-[#333333] max-w-screen-lg justify-center  '>
      <div>
      <h2 className='font-bold text-black flex text-4xl border-b-4 border-[#001F3F] mt-10'> Experience </h2>
      <p className='text-xl mt-4'> I am proficient with technologies like as git, javascript, html5, CSS, and Tailwind.</p> </div>
      {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 "> */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techlist.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-24 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      
      

      </div>
    </div>
  )
}

export default Experience


// <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 px-15 md:p-0 w-full '>
// <div key=" " className='rounded-lg shadow-md shadow-[#DDD0C0]   p-2 mt-5 '>
// <img src={javascript} alt="" className='rounded-lg scale-100 hover:scale-110 duration-200' />
// <p className='text-xl font-bold w-full mt-2 scale-100 hover:scale-110 duration-200'> Javascript </p>
// </div>


// </div>


