import React from 'react'
// import { TbMessage2Share } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";

function Contact() {
  return (
    <div name="Contact" className='md:h-screen  w-full bg-[#FDF7EF]'>
        <div className='h-full w-full max-w-screen-lg mx-auto flex flex-col justify-center  '>
            <div>
                <h2 className='flex text-black  font-bold border-b-4 border-[#001F3F] md:text-xl text-base '> Contact </h2>
                <br />
                <p className='md:text-lg text-base  '>Submit this form to reach me out </p>
            </div>
             <div className='bg-[#ECE3D7] p-2 rounded-xl justify-center  flex flex-col'>
               <form action="https://getform.io/f/jbwxwlga" method="post" className='w-1/2  flex flex-col '>
                <label htmlFor="Em" className='mt-4  ml-4'> Email</label>
                
                <input type="email" name="email" id="Em "className='rounded-lg hover:outline-none w-full ml-4 p-2'  placeholder='Enter your Email'/>
          
                <label htmlFor="Nm" className='mt-5  ml-4'> Name:</label>
                
                <input type="text " name="name" id="Nm" className='rounded-lg  hover:outline-none w-full ml-4 p-2 ' placeholder='Enter your Name' />
                
                <label htmlFor="topic" className='mt-5 ml-4 '>Topic </label>
               
                <input type="text" name="topic" id="topic" className='rounded-lg  hover:outline-none w-full  ml-4 p-2' placeholder='Enter Topic of the Message' />
                
                <label htmlFor="Msg" className='mt-5  ml-4'> Message</label>
              
                <textarea name="content"  id="Msg" cols="30" rows="10" className='rounded-lg hover:outline-none w-full ml-4 p-2' placeholder='Enter your Message'></textarea>
                
                <div className='flex  mt-4  ml-4' >
                <button type="button" className=' group rounded-lg font-bold bg-gradient-to-r from-red-500 to-[#FF6B6B] p-2 flex items-center gap-x-3'> Submit 
                <span className=' group-hover:rotate-180 duration-300'> <FaMessage /></span> </button>
              
                </div>
                 </form>
             </div>
        </div>
      
    </div>



  )
}

export default Contact

// background = bg-[#FDF7EF]
// header ,footer= bg-[#2C3E50]
// header text=text-[#F9E4AD]
// buttons =bg-[#FF6B6B]
// text-overall= text-[#333333]
