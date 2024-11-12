"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci"

const Links = [
    {
        name: "home",
        path: "/",
    },
    // {
    //     name: "services",
    //     path: "/services",
    // },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    }
]

const Mobilenav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent-default' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className='mt-24 mb-28 text-center text-2xl'>
                    <Link href="/" onClick={handleLinkClick}><h1>
                        Hamad<span className='text-accent-default'>.</span>
                    </h1></Link>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-4'>
                    {Links.map((item, index) => {
                        return (
                            <Link 
                                href={item.path} 
                                key={index} 
                                className={`${item.path === pathname && "text-accent-default border-b-2 border-accent-default"} font-medium capitalize hover:text-accent-default transition-all`}
                                onClick={handleLinkClick}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default Mobilenav
