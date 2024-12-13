import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import banner from "../assets/image/banner.png"
import Typed from "typed.js";
import {Link} from "react-scroll"
import { FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";

function Home() {
    
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Learner",  "MERN Developer" , "React Developer","Frontend Developer","Full Stack" ], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 10,
        backDelay: 100,
        loop:true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
    const socials=[
        {
            id:1,
            title:"Linkdein",
            path:"https://www.linkedin.com/",
            icon:<FaLinkedin size={30}/>,
            load:true,

        },
        {
            id:2,
            title:"Github",
            path:"https://github.com/",
            icon:<FaGithub size={30}/>,
            load:true,

        },
        {
            id:3,
            title:"Twitter",
            path:"https://twitter.com",
            icon:<FaTwitter size={30}/>,
            load:true,

        },
        {
            id:4,
            title:"Gmail",
            path:"mailto:mohitatwork21@gmail.com",
            icon:<SiGmail  size={30}/>,
            load:true,


        },
        {
            id:5,
            title:"Resume",
            path:"/Resume.pdf",
            icon:<IoMdDocument size={30}/>,
            load:true,

        }
    ]
    

   
    
    return (
        <div name="Home" className=' w-full md:h-screen   flex bg-gradient-to-b from-[#e3ddda] to-[#FDF7EF] h-full  '>
            {/* left side */}
            <div className=' text-[#333333] max-w-screen-lg  mx-auto items-center justify-center  md:justify-between  h-full flex  flex-col px-4 md:flex-row mt-24 md:mt-0 '>
                <div className='  gap-y-8 md:w-1/2 pt-5 md:pt-16'>
                    <h3 className='text-2xl sm:text-3xl '> Hi I am</h3>
                    <h1 className=' text-5xl sm:text-5xl text-black font-bold'  >Mohit Khedwal</h1>
                    <h2 className='text-4xl sm:text-4xl' >   I am a   <span ref={el}> </span> </h2>
                    <p className='md:text-lg text-base pt-2'>
                    Thank you for visiting my personal website! My name is Mohit Khedwal, and I'm a bachelor of technology student studying information technology at the moment. You may see a selection of my work and projects that highlight my expertise, enthusiasm, and front-end programming skills in this portfolio. It also contains a solid foundation in web development. I am always trying to get better and learn more about the industry, whether it be with an e-commerce website or a blog website. I appreciate you taking the time to browse at my portfolio, and I'm excited to get in contact with you.
                          </p>
                    <div className='flex md:hidden w-full mt-2 p-2 pl-0'>
                      <ul className='flex gap-x-3 '>
                        {
                           socials.map((item)=>(
                            <li key={item.id} className=''>
                                <a href={item.path} download={item.load} target='_blank'>{item.icon}</a>
                            </li>
                           ))
                        }
                      </ul>
                    </div>
                    <div className='mt-4'>
                    <Link to="Projects" smooth duration={500} ><button className=' group bg-gradient-to-r from-red-500 to-[#FF6B6B] text-black px-5 py-2 flex items-center gap-x-3  rounded-lg '>
                        Portfolio
                        <span className=' group-hover:rotate-90 duration-200'><FaArrowRight /> </span>
                        {/*  now i want to hover it when i click whole butoon so to do that i will group the button */}
                    </button></Link>
                </div>

                </div>
                
                {/* photo side */}
                <div className=' p-0 mt-16 md:mt-0 md:px-5'>
                    <img src={banner} alt="img" className='rounded-lg md:w-full w-2/3' />
                </div>
            </div>


        </div>
    )
}

export default Home







