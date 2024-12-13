import React from 'react'

function About() {
  return (
    <>
      <div name="About" className=' w-full bg-[#FDF7EF] md:h-screen h-full     '>
        <div className='flex flex-col   text-[#333333]  justify-center w-[95%]  max-w-screen-lg mx-auto h-full pt-10 md:pt-0 pb-4  '>
          <div>
            <h2 className='justify-start items-center font-bold text-4xl text-black flex border-b-4 border-[#001F3F]'>About Me</h2>
          </div>
          <p className='flex justify-center md:text-lg text-base  mt-7'>
            <br />
            Hi, I'm Mohit Khedwal, a dedicated MERN stack developer with a passion for building dynamic and scalable web applications. I specialize in creating seamless user interfaces using ReactJS, developing robust backends with Node.js and Express, and efficiently managing data with MongoDB. Combining creativity with technical expertise, I approach every project with a focus on delivering user-centric and high-performance solutions.         </p>
          <br />
          <p className=' justify-center md:text-lg text-base   '>
            What I Provide:
            <br />
            <strong>ReactJS Expertise:</strong>I specialize in developing dynamic, user-centric applications using ReactJS, including seamless navigation with react-router-dom. By leveraging functional components, hooks, and state management tools like Redux, I ensure codebases are scalable, maintainable, and optimized for performance.  <br />
            <strong>Tailwind CSS Proficiency:</strong>I create visually appealing and responsive designs using Tailwind CSS, leveraging its utility-first framework to efficiently style applications without writing extensive custom CSS. This approach allows me to focus on enhancing functionality and user experience.   <br />
            <strong>Full-Stack JavaScript Development:</strong> With proficiency in both frontend and backend JavaScript, I build robust and scalable web applications. I utilize Node.js and Express to handle server-side operations and API integrations, ensuring secure and efficient performance.            <br />
            <strong>Database Management with MongoDB:</strong>I am skilled in using MongoDB for managing data, creating schemas, and performing efficient CRUD operations. This enables me to build data-driven applications with robust backend support.           <br />
          <strong>  HTML & CSS Mastery:</strong> I ensure semantic and accessible web designs with expertise in HTML5 and CSS3. I also incorporate animations and transitions to enhance user engagement and deliver responsive interfaces. <br />
          <strong>Collaborative Development::</strong>I excel at working in teams, collaborating with designers, stakeholders, and backend developers to deliver high-quality solutions. I prioritize agile methodologies and transparent communication to ensure project success from planning to deployment.          </p>


        </div>

      </div>
    </>
  )
}

export default About

// bg-gradient-to-r from-[#ECE3D7] to-[#FDF7EF]