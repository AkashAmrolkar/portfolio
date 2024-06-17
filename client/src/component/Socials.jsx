import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Socials = () => {
    const social = [
        {
            img: <FaGithub />,
            link: 'https://github.com/AkashAmrolkar'
        },
        {
            img: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/akash-amrolkar'
        },
        {
            img: <FaInstagram />,
            link: 'https://www.instagram.com/akash_amrolkar_aa/'
        },
        {
            img: <FaXTwitter />,
            link: ''
        }

    ]
  return (
    <div className='socials flex flex-col gap-1 p-2 bg-primary shadow-xl fixed border border-secondary top-1/2'>
        {
            social?.map((item, index)=>(
                <Link to={item.link} className='text-secondary h-6 w-6'>{item?.img}</Link>
            ))
        }
    </div>
  )
}

export default Socials