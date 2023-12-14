import React from 'react'
import { IoLocationOutline, IoPhonePortraitOutline, IoMailOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const GetInTouch = () => {
    const personalData = [
        {
            icon: IoLocationOutline,
            content: 'At- Bukkihal,'
        },
        {
            icon: IoPhonePortraitOutline,
            content: '8380863314'
        },
        {
            icon: IoMailOutline,
            content: 'akashamrolkar10@gmail.com'
        },
    ]
    return (
        <div>
            <p className='text-gray-500 text-lg mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
            <div className='mb-5'>
                <div className='flex gap-2 items-center mb-3 '>
                    <IoLocationOutline className=' h-6 w-6' /><p className=' text-gray-500 text-lg'>Pune</p>
                </div>
                <div className='flex gap-2 items-center mb-3'>
                    <IoPhonePortraitOutline className=' h-6 w-6' /><p className=' text-gray-500 text-lg'>8380863314</p>
                </div>
                <div className='flex gap-2 items-center mb-3'>
                    <IoMailOutline className=' h-6 w-6' /><p className=' text-gray-500 text-lg'>akashamrolkar10@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <Link to='#'><FaLinkedin className='text-black hover:opacity-70 text-3xl' /></Link>
                <Link to='#'><FaInstagram className='text-black hover:opacity-70 text-3xl' /></Link>
                <Link to='#'><FaGithub className='text-black hover:opacity-70 text-3xl' /></Link>
            </div>
        </div>
    )
}

export default GetInTouch