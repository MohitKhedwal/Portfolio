import React from 'react'

function About() {
  return (
    <>
      <div name="About" className=' w-full bg-[#FDF7EF] md:h-screen h-full     '>
        <div className='flex flex-col   text-[#333333]  justify-center  w-full max-w-screen-lg mx-auto h-full pt-10 md:pt-0 pb-4 '>
          <div>
            <h2 className='justify-start items-center font-bold text-4xl text-black flex border-b-4 border-[#001F3F]'>About Me</h2>
          </div>
          <p className='flex justify-center md:text-xl  text-base  mt-7'>
            <br />
            Hi there! My name is Mohit Khedwal and I work as a front-end developer. I specialize in creating user interfaces that are responsive and modern, utilizing a variety of technologies such as HTML, CSS, JavaScript, Tailwind CSS, and ReactJS. I approach every project I work on with creativity and technical know-how, having a strong background in web development.
          </p>
          <br />
          <p className=' justify-center md:text-xl text-base '>
            What I Provide:
            <br />
            <strong>ReactJS Understanding:</strong> I am highly proficient at using ReactJS and react-router-dom to create dynamic, interactive single- and multi-page applications. I guarantee scalable and manageable codebases by utilizing functional components, hooks, and state management tools like Redux.
            <br />
            <strong>Tailwind CSS Wizardry:</strong> I know how to quickly style applications with Tailwind CSS, utilizing its utility classes to produce slick designs without having to write bespoke CSS. I can concentrate less on tedious style chores and more on functionality with this method.
            <br />
            <strong>HTML & CSS Proficiency:</strong> I am proficient with both HTML5 and CSS3, which guarantees attractive styling and semantic markup. I have expertise incorporating animations and transitions into responsive design to improve user experience.
            <br />
            <strong>Expertise in JavaScript:</strong> Since JavaScript is the foundation of frontend development, I take advantage of its capabilities to build sophisticated functionality and interactive features. I know a lot about contemporary JavaScript frameworks and ES6+ standards.
            <br />
          <strong>  Collaborative Approach:</strong> I work well in groups, collaborating closely with stakeholders, backend engineers, and designers to produce outstanding outcomes. To ensure project success, I emphasize transparent communication and agile approaches.

          </p>


        </div>

      </div>
    </>
  )
}

export default About

// bg-gradient-to-r from-[#ECE3D7] to-[#FDF7EF]