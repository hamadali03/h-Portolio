'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from "react-icons/fi"
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import States from '@/components/States'

const Home = () => {
  const handleDownloadCV = (e) => {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = '/assets/skills/HamadAliResume (1).pdf'; // Replace with your actual CV file path
    link.download = 'Muhammad Hamad'; // Set the desired download filename
    link.click();
  };

  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row justify-between items-center'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>MERN STACK DEVELOPER</span>
            <h1 className='h1 mb-6 mt-2 gap-2'>
              Hello I'm <br /><span className=' text-accent-default'>Hamad</span>
            </h1>
            <p className='max-w-[500px] text-white/80 mb-9 text-base' >
          I am a full-stack software Engineer with over a year of hands-on experience in building
scalable and high-performance web applications. My core stack includes Frontend
technologies like React.js, Next.js, and Tailwind CSS, as well as Backend technologies
such as Node.js and Express.js. I also work extensively with databases like MongoDB and
MySQL. With a strong focus on clean architecture, API design, and DevOps (GitHub
Actions, Vercel), I ensure quality and speed in every delivery. I am recognized for my
problem-solving skills, effective communication, and collaborative teamwork.


            </p>
            {/* btn and social */} 
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className="flex uppercase items-center gap-2" onClick={handleDownloadCV}>
                <span>Download CV </span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" iconsStyles="w-9 h-9 border border-accent-default rounded-full flex items-center justify-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
         {/* photo */}
<div className='order-1 xl:order-none ml-9 mb-8 xl:mb-0'>
  <img 
    src="/assets/photo1.png" 
    alt="Hamad" 
    className="w-[300px] h-[300px] object-contain rounded-2xl shadow-lg" 
  />
</div>

        </div>
      </div>
      <States />
    </section>
  )
}

export default Home
