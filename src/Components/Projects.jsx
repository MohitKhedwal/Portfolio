import React from 'react'
import ptry from "../assets/image/ptry.jpg"

function Projects() {

  const projectlist = [
    {
      id: 1,
      src: ptry,
      link: "https://github.com/",
      head:"Blog Website"
    },
    {
      id: 2,
      src: ptry,
      link: "https://github.com/",
      head: "Portfolio"
    },
    {
      id: 3,
     src: ptry,
      link: "https://github.com/",
      head:"E-commerce"
    },
    {
      id: 4,
      src: ptry,
      link: "https://github.com/",
      head:"Weather App"
    },
    {
      id: 5,
      src: ptry,
      link: "https://github.com/",
      head:"Todo App"
    },
    // {
    //   id: 6,
    //   src: ptry,
    //   link: "https://github.com/",
    //   head:" p6"
    // },
    
  ]
  return (
    <div name="Projects" className=' w-full bg-[#FDF7EF] md:h-screen    '>
      <div className='flex flex-col   text-[#333333]  justify-center  w-full  max-w-screen-lg  mx-auto h-full  '>
        <div>
          <h2 className=' items-center font-bold text-4xl text-black flex border-b-4 border-[#001F3F]'>Projects</h2>
          <br />
          <p className=' text-2xl '> Check out My Projects </p>
        </div>
        <div className='px-15 md:p-0 grid  sm:grid-cols-3 grid-cols-1  gap-10'>
          {/* for cards */}
          {projectlist.map(({ id, link, src,head }) => (
            <div key={id} className='rounded-lg shadow-md shadow-[#DDD0C0] p-2 mt-5'>
              <img src={src} alt="" className='rounded-lg  hover:scale-110 duration-200 ' />
              <p className='text-xl w-full text-center '> {head} </p>
              <hr className='text-black' />
              <button className='text-xl font-bold w-full mt-2  hover:scale-110 duration-200'> <a href={link} target='_blank'> Code</a> </button>
            </div>
          )

          )}
        </div> 

        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {projectlist.map(({ id, src,link }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg group-[]:"
            >
              <img src={src} alt="" className=" mx-auto" />
              <p className="mt-4 "> <a href={link} className=' group font-bold ' target='_blank'> Code </a></p>
            </div>
          ))}
        </div> */}



      </div>

    </div>

  )
}

export default Projects

// background = bg-[#FDF7EF]
// header ,footer= bg-[#2C3E50]
// header text=text-[#F9E4AD]
// buttons =bg-[#FF6B6B]
// border-[#001F3
// text-overall= text-[#333333]

/* <div  name="Projects" className='w-full h-screen bg-[#FDF7EF]'>
<div className=' text-[#333333] flex  flex-col max-w-screen-lg mx-auto  justify-center items-center w-full h-full p-4'>
    {/* for overall */
//     <div>
//     <h2 className=' flex justify-start  items-center text-4xl  text-black font-bold  border-b-4 border-[#001F3F] '> Projects</h2>
//     </div>

// </div> */}

// </div>