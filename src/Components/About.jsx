import React from 'react'

function About() {
  return (
    <>
    <div name="About" className=' w-full bg-[#FDF7EF] h-screen    '>
        <div className='flex flex-col   text-[#333333]  justify-center  w-full max-w-screen-lg mx-auto h-full '>
           <div>
           <h2 className='justify-start items-center font-bold text-4xl text-black flex border-b-4 border-[#001F3F]'>About Me</h2>
           </div>
            <p className='flex justify-center md:text-xl   mt-10 '>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto facere atque ipsum vel corporis reiciendis hic magni reprehenderit quod quis fuga? Nesciunt eaque ipsa laborum quisquam, obcaecati eius dolore modi? Nostrum eligendi nesciunt adipisci? Perspiciatis iste libero quis repudiandae.
            </p>
            <br/>
            <p className='flex justify-center md:text-xl '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maxime reprehenderit soluta iusto voluptatem error ipsum maiores tempore consequuntur consequatur dignissimos eligendi labore cupiditate quae dolorum nemo, modi ut inventore sed, perferendis incidunt voluptas ea asperiores. Autem corrupti esse doloribus.
            </p>


        </div>
      
      </div>
    </>
  )
}

export default About

// bg-gradient-to-r from-[#ECE3D7] to-[#FDF7EF]