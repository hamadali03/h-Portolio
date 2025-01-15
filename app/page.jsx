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
            A developer, creative coder and software engineer who specializes in full stack web development. I have a proven track record of designing and implementing innovative web solutions. My expertise is crafting modern, cutting-edge websites that help businesses enhance their online presence. I am eager to apply my knowledge and skills to real-world projects and contribute to a dynamic development team.

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
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <States />
    </section>
  )
}

export default Home
