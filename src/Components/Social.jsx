import React from 'react'
import { FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";


function Social() {

    const socials=[
        {
            id:1,
            title:"Linkdein",
            link:"https://www.linkedin.com/",
            icon:<FaLinkedin size={30}/>,
            load:true,

        },
        {
            id:2,
            title:"Github",
            link:"https://github.com/",
            icon:<FaGithub size={30}/>,
            load:true,

        },
        {
            id:3,
            title:"Twitter",
            link:"https://twitter.com",
            icon:<FaTwitter size={30}/>,
            load:true,

        },
        {
            id:4,
            title:"Gmail",
            link:"mailto:mohitatwork21@gmail.com",
            icon:<SiGmail  size={30}/>,
            load:true,


        },
        {
            id:5,
            title:"Resume",
            link:"/Resume.pdf",
            icon:<IoMdDocument size={30}/>,
            load:true,

        }
    ]
  return (
    <div className='  hidden lg:flex flex-col justify-center w-48  top-[33%] md:left-0 right-0 fixed '>
        <ul className='gap-y-3'>
           {socials.map(({id,link,title,icon,load})=>(
             <li key={id} className=' text-black bg-gradient-to-r from-red-500 to-[#FF6B6B] flex text-xl justify-between w-full items-center h-12  font-bold font-mono   px-4 ml-[-130px]  rounded-full  hover:ml-0  duration-500 mt-2    '> 
             <a href={link} target="_blank" className='flex justify-between items-center w-full cursor-pointer ' download={load}>{title} {icon}  </a></li>

           ))}
        </ul>
       
    </div>
  )
}

export default Social

// text-[#F9E4AD]