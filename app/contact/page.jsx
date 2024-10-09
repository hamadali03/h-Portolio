'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from '@/components/ui/select'

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'

const Info=[
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:'(+92) 335 404 1185'
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:'hammad1904054@gmail.com'
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Address',
    description:'Lahore'
  },
]
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} className='py-6'>
      <div className='container mx-auto'>
         <div className='flex flex-col xl:flex-row gap-[20px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-7 bg-[#27272c] rounded-xl '>
            <h3 className='text-3xl text-accent-default'>Let's Work together</h3>
            {/* <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga corporis laboriosam officiis quia! Saepe minima</p> */}

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
              <Input type='firstname' placeholder='Firstname'/>
              <Input type='lastname' placeholder='Lastname'/>
              <Input type='email' placeholder='Email address'/>
              <Input type='phone' placeholder='Phone Number'/>
            </div>

            <Select >
               <SelectTrigger className='w-full'>
                <SelectValue placeholder='select a services'/>
               </SelectTrigger>
               <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value='est'>Web Development</SelectItem>
                  {/* <SelectItem value='cst'>UI/UX Design</SelectItem> */}
                  <SelectItem value='mst'>Logo Design</SelectItem>
                </SelectGroup>
               </SelectContent>
            </Select>
            <Textarea className='h-[200px]' placeholder='Type your message here'/>
            <Button size='md' className='max-w-40'>Send message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center order-1 xl:order-none xl:justify-end mb-20 '>
            <ul className='flex flex-col gap-8'>
              {Info.map((item,index)=>{
                 return(
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[46px] h-[46px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-default rounded-md items-center flex justify-center'>
                      <div className='text-[24px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-lg'>{item.description}</h3>
                    </div>
                  </li>
                 )
              })}
            </ul>
          </div>
         </div>
      </div>
    </motion.section>
  )
} 
    
export default Contact
