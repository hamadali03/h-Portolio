"use client"
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about={
  title:"About me",
  // description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias",
  info:[
    {fieldName:"Name",fieldValue:"Hamad"},
    {fieldName:"Phone",fieldValue:"(+92) 335 404 1185"},
    {fieldName:"Experience",fieldValue:"1+ Years"},
    // {fieldName:"Skype",fieldValue:"Luke.01"},
    {fieldName:"Nationality",fieldValue:"Pakistan"},
    {fieldName:"Email",fieldValue:"hammad1904054@gmail.com"},
    // {fieldName:"Freelance",fieldValue:"Available"},
    {fieldName:"Language",fieldValue:"English, Urdu"},
  ]
}

const experience={
  icon:"/assets/resume/badge.svg",
  title:"My Experience",
  // description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias",
  items:[
    {company:"Tech slution",position:"Full Stack Developer",duration:"2024-present"},
    {company:"Freelancing",position:"Front-End Developer",duration:"2024"},
    // {company:"E-commerec Startup",position:"Freelance Web Developer",duration:"2020-2021"},
    // {company:"Tech Academy",position:"Teaching Assistant",duration:"2019-2020"},
    // {company:"Digital Agency",position:"UI/UX Designer",duration:"2018-2019"},
    // {company:"Software Developer Firm",position:"Junior Developer",duration:"2017-2018"},
  ]
}

const education={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  // description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias",
  items:[
    {institution:"City College",degree:"ICS",duration:"2017-2019"},
    {institution:"Virtual University",degree:"BS-IT",duration:"2020-2024"},
    // {institution:"Online Course",degree:"Programming Course",duration:"2020-2021"},
    {institution:"Tevta institution",degree:"Certified Web Developer",duration:"2023"},
    // {institution:"Design School",degree:"Diploma in Graphic Design",duration:"2016-2018"},
    // {institution:"Community College",degree:"Associate Degree in computer science",duration:"2014-2016"},


  ]
}

const skill={
  title:"My Skills",
  // description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias",
  skillLists:[
    {icons:<FaHtml5/>,name:'html 5'},
    {icons:<FaCss3/>,name:'css 3'},
    {icons:<FaJs/>,name:'javascript'},
    {icons:<FaReact/>,name:'react.js'},
    {icons:<SiNextdotjs/>,name:'next.js'},
    {icons:<SiTailwindcss/>,name:'tailwind.css'},
    {icons:<FaNodeJs/>,name:'node.js'},
    // {icons:<FaFigma/>,name:'figma'},
  ]
}

import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
const resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'> 
      <div className=" container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger> 
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
          <TabsContent value='experience' className='w-full'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <h3 className='text-3xl font-bold'>{experience.title}</h3>
            <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>{experience.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {experience.items.map((item,index)=>{
                  return (
                    <li key={index} className='bg-[#232329] h-[184px] rounded-xl py-6 px-10 gap-1 flex justify-center flex-col items-center lg:items-start'>
                      <span className='text-accent-default text-base'>{item.duration}</span>
                      <h3 className='text-base max-w-[260px] max-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'> 
                        <span className='w-[6px] h-[6px] bg-accent-default rounded-full'></span>
                        <p className='text-white/60 text-base'>{item.company}</p>
                      </div>
                    </li>
                  )
                    
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>
          <TabsContent value='education' className='w-full'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <h3 className='text-3xl font-bold'>{education.title}</h3>
            <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>{education.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {education.items.map((item,index)=>{
                  return (
                    <li key={index} className='bg-[#232329] h-[184px] rounded-xl py-6 px-10 gap-1 flex justify-center flex-col items-center lg:items-start'>
                      <span className='text-accent-default text-base'>{item.duration}</span>
                      <h3 className='text-base max-w-[260px] max-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                      <div className='flex items-center gap-3'> 
                        <span className='w-[6px] h-[6px] bg-accent-default rounded-full'></span>
                        <p className='text-white/60 text-base'>{item.institution}</p>
                      </div>
                    </li>
                  )
                    
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>
          <TabsContent value='skill' className='w-full h-full'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <div lassName='flex flex-col gap-[30px] text-center xl:text-left'>           
           <h3 className='text-3xl font-bold'>{skill.title}</h3>
          <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>{skill.description}</p>
          </div>

            {/* <ScrollArea className="h-[400px]"> */}
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]  gap-4'>
                {skill.skillLists.map((item,index)=>{
                  return (
                    <li key={index} className='bg-[#232329] h-[165px] rounded-xl py-5 px-8 gap-1 flex justify-center flex-col items-center lg:items-start'>
                     <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[140px]  rounded-xl  flex items-center justify-center group bg-[#232329]'>
                          <div className='text-5xl group-hover:text-accent-default transition-all duration-500'>{item.icons}</div>
                        </TooltipTrigger>
                        <TooltipContent >
                          <p className=" capitalize">{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                     </TooltipProvider>
                    </li>
                  )
                    
                })}
              </ul>
            {/* </ScrollArea> */}
          </div>
          </TabsContent>
          <TabsContent value='about' className='w-full text-center xl:text-left'>
          <div className='flex flex-col gap-[30px] '>
          {/* <div lassName='flex flex-col gap-[30px] text-center xl:text-left'>            */}
           <h3 className='text-3xl font-bold'>{about.title}</h3>
          <p className='max-w-[600px] mx-auto text-white/60 xl:mx-0'>{about.description}</p>
          {/* </div> */}

            {/* <ScrollArea className="h-[400px]"> */}
              <ul className='grid grid-cols-1 gap-y-6 xl:grid-cols-2 xl:mx-0 max-w-[620px] mx-auto '>
                {about.info.map((item,index)=>{
                  return (
                    <li key={index} className='flex justify-center gap-4 items-center xl:justify-start'>
                    <span className='text-white/60 text-base'>{item.fieldName}</span>
                    <span className='text-base'>{item.fieldValue}</span>
                    </li>
                  )
                    
                })}
              </ul>
            {/* </ScrollArea> */}
          </div>
         
          </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume;
