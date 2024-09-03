"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links=[
    {
        name:"home",
        path:"/",
    },
    // {
    //     name:"services",
    //     path:"/services",
    // },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"work",
        path:"/work",
    },
    {
      name:"contact",
        path:"/contact",  
    }
]
const Nav = () => {
    const pathname=usePathname()

  return (
    <nav className='flex gap-6'>
      {Links.map((item,index)=>{
          return(
            <Link key={index} className={`${item.path===pathname && "text-accent-default border-b-2 border-accent-default"} font-medium capitalize hover:text-accent-default transition-all}`} href={item.path} >{item.name}</Link>
          )
      })}
    </nav>
  )
}

export default Nav
