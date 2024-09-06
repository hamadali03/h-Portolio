"use client"
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import {BsArrowRight,BsGithub} from "react-icons/bs"
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import WorkSlidebtn from '@/components/WorkSlidebtn'
// import Swiper from 'swiper'

const projects=[
  {
     num:'01',
     category:'frontend',
     title:'project 1',
    //  desctription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sint, voluptate perferendis quis ',
     stack:[{name:'Html 5'},{name:'Css 3'},{name:'javascript'}],
     image:"/assets/work/thumb1.png",
     live:'',
     github:''
  },
  {
    num:'02',
    category:'fullstack',
    title:'project 2',
   //  desctription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sint, voluptate perferendis quis ',
    stack:[{name:'Node & Express JS'},{name:'React.js'}],
    image:"/assets/work/thumb7.PNG",
    live:'',
    github:''
 },
  {
    num:'03',
    category:'frontend',
    title:'project 3',
    // desctription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sint, voluptate perferendis quis ',
    stack:[{name:'Html'},{name:'Tailwind.css'}],
    image:"/assets/work/thumb2.png",
    live:'',
    github:''
 },
 {
  num:'04',
  category:'frontend',
  title:'project 4',
  // desctription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sint, voluptate perferendis quis ',
  stack:[{name:'HTML 5'},{name:'CSS 3'},{name:'javascript'}],
  image:"/assets/work/thumb5.PNG",
  live:'https://dog-security-guards.web.app/index.html',
  github:''
},
{
  num:'05',
  category:'fullstack',
  title:'project 5',
  // desctription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sint, voluptate perferendis quis ',
  stack:[{name:'Node.js'},{name:'React.js'},{name:'Tailwind.Css'}],
  
  image:"/assets/work/thumb4.PNG",
  live:'https://full-auth-ezvv.vercel.app/',
  github:'https://github.com/hamadali03/full-auth'
},
{
  num:'06',
  category:'fullstack',
  title:'project 6',
  // desctription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sint, voluptate perferendis quis ',
  stack:[{name:'Next.js'},{name:'Tailwind.Css'}],
  
  image:"/assets/work/thumb6.PNG",
 live:'',
  github:'https://github.com/hamadali03/bloging'
}
]
  
const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlidechange=(swiper)=>{
     const currentIndex=swiper.activeIndex;
     setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} className='flex min-h-[80vh] flex-col justify-center py-12 xl:px-0'>
    <div className='container mx-auto'>
    <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
      
      <div className='w-full xl:w-[50%] xl:h-[450px] flex flex-col xl:justify-between order-2 xl:order-none'>
      <div className='flex gap-[30px] flex-col h-[50%]'>
        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
          {project.num}
        </div>
        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize'>{project.category} Project</h2>
        <p className='text-white/60'>{project.desctription}</p>

        <ul className='flex gap-4'>
          {project.stack.map((item,index)=>{
               return(
                <li key={index} className='text-xl text-accent-default'>{item.name}
                {index !==project.stack.length -1 && ","}
                </li>
               )
          })}
        </ul>
        <div className='border border-white/70'></div>
        <div className='flex items-center gap-4'>
          <Link  href={project.live}>
         
            <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className='w-[70px] h-[70px] flex justify-center items-center rounded-full bg-white/5 group'>
              <BsArrowRight className='text-white text-3xl group-hover:text-accent-default -rotate-45'/>
                 
              </TooltipTrigger>
              <TooltipContent>
              <p>Live Project</p>
              </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        

          </Link>
          <Link href={project.github}>
         
            <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className='w-[70px] h-[70px] flex justify-center items-center rounded-full bg-white/5 group'>
              <BsGithub className='text-white text-3xl group-hover:text-accent-default '/>
                 
              </TooltipTrigger>
              <TooltipContent>
              <p>github repository</p>
              </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        

          </Link>
        </div>
</div>
      </div>
      <div className='w-full xl:w-[50%]'>
        <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlidechange} className='xl:h-[520px] mb-12'>
          {projects.map((item,index)=>{
            return(
              <SwiperSlide key={index}>
                 <div className='h-[430px] flex items-center justify-center group relative '>
                  <div className='h-full w-full top-0 bottom-0 absolute bg-black/10 z-10'></div>
                  <div className='h-full w-full relative '>
                    <Image src={item.image} alt='' fill className=' object-contain'/>
                  </div>
                 </div>
                 <div className=' '></div>
              </SwiperSlide>
            )
           
          })}
          <WorkSlidebtn containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none ' btnStyles='bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'/>
        </Swiper>
      </div>
    </div>
    
    </div>
     
    </motion.section>
  )
}

export default Work
