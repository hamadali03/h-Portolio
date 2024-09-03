"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stair from './Stair'

const StairTransition = () => {
    const pathname=usePathname()
  return (
    <>
    <AnimatePresence mode='wait' className="h-full">
       <div key={pathname}>
        <div className='h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex'>
             <Stair/>
        </div>
       </div>
    </AnimatePresence>
    </>
  )
}

export default StairTransition
