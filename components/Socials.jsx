import React from 'react'
import Link from 'next/link'
import {FaTwitter,FaFacebook,FaLinkedin,FaGithub} from "react-icons/fa"

const Social=[
    // {icon:<FaFacebook/>,path:""},
    {icon:<FaGithub/>,path:"https://github.com/hamadali03"},
    {icon:<FaLinkedin/>,path:"https://www.linkedin.com/in/hammad-ali-a7b423222/"},
    // {icon:<FaTwitter/>,path:""},
]
const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={containerStyles}>
      {Social.map((items,index)=>{
        return <Link href={items.path} key={index} className={iconsStyles}>{items.icon}</Link>
      })}
    </div>
  )
}

export default Socials
