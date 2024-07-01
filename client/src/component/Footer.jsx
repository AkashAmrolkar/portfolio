import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const social = [
        {
            img: <FaGithub className='text-secondary bg-primary p-2 rounded-md h-10 w-10' />,
            link: 'https://github.com/AkashAmrolkar'
        },
        {
            img: <FaLinkedin className='text-secondary bg-primary p-2 rounded-md h-10 w-10' />,
            link: 'https://www.linkedin.com/in/akash-amrolkar'
        },
        {
            img: <FaInstagram className='text-secondary bg-primary p-2 rounded-md h-10 w-10' />,
            link: 'https://www.instagram.com/akash_amrolkar_aa/'
        },
        {
            img: <FaXTwitter className='text-secondary bg-primary p-2 rounded-md h-10 w-10' />,
            link: ''
        }

    ]
  return (
    <div className=' bg-secondary py-10 shadow-md'>
        <div className='flex gap-4 items-center justify-center'>
        {
            social?.map((item, index)=>(
                <Link to={item.link} className='text-secondary h-10 w-10 transition duration-300 ease-in-out transform hover:scale-105'>{item?.img}</Link>
            ))
        }
        </div>
    </div>
  )
}

export default Footer