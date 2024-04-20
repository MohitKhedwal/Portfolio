import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

export default function Header() {
//  it is used to know the current status whesther to show icon o not
    const [nav,setNav]=useState(false)
    const menu=[
        {
            id:1,
            title:"Home",
            link:"/"
        },
     
        {
            id:2,
            title:"About",
            link:"/About"
        },
        {
            id:3,
            title:"Projects",
            link:"/Projects"
        },
        {
          id:5,
          title:"Experience",
          link:"/"
         },
        {
            id:4,
            title:"Contact",
            link:"/Contact"
        },
      ]
    
  return (
    <div className='font-poppins'>
      <div className='flex justify-between   items-center px-12 py-2   w-full  fixed h-24 bg-[#2C3E50]   text-slate-200'>
         <div>
         <h1 className='text-3xl scale-100 hover:scale-110  text-[#F9E4AD]'> Mohit Khedwal </h1>
         </div>
         {/* // now we know  as tailwind is mobile first if we hidden minwidth 760 px then it will not show on  small screen */}
         <ul className='    hidden md:flex    gap-x-7 list-none'>
                  {menu.map(({id,title,link})=>(
                    <li  key={id} className=' font-medium cursor-pointer text-lg scale-100 hover:scale-110'>
                    <Link id={id} to={title} smooth duration={500}>{title}</Link> </li>
                  ))}
            </ul>

            
          <div  onClick={()=>setNav((!nav))}  className=' text-[#FF6B6B] cursor-pointer z-20  md:hidden'>
          {    nav?<FaTimes  size={30}    /> : <FaBars  size={30}   />}
          </div>
          {nav && ( <div >
           <ul className=' gap-y-10 flex  flex-col justify-center w-full h-screen items-center absolute top-0 left-0 bg-gradient-to-b from-[#FDF7EF] to-[#FDF7EF]  text-[#333333] '>
                 {menu.map(({id,title,link})=>(
                     <li  key={id} className=' font-medium  text-3xl scale-100 hover:scale-110'>
                      <Link  onClick={()=>(setNav(!nav))}id={id} to={title} smooth duration={500}>{title}</Link>  </li>
                 ))}
          </ul>
           </div>)}
      </div>
    </div>
  )
}
// background = bg-[#FDF7EF]
// header ,footer= bg-[#2C3E50]
// header text=text-[#F9E4AD]
// buttons =bg-[#FF6B6B]
// text-overall= text-[#333333]

// md:hidden means it will hidden on screen larger than 768px