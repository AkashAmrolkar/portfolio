import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope  } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const GetInTouch = () => {
    const personalData = [
        {
            icon: <FaPhoneAlt className='text-secondary bg-primary p-2 rounded-md h-10 w-10' />,
            content: '8380863314',
            link: 'tel:8380863314'
        },
        {
            icon: <FaEnvelope  className='text-secondary bg-primary p-2 rounded-md h-10 w-10' />,
            content: 'akashamrolkar10@gmail.com',
            link: 'mailto:akashamrolkar10@gmail.com'
        },
    ]
    return (
        <div>
            <p className='text-white text-lg mb-5'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className='mb-5'>
                {
                    personalData.map((data, index)=>(
                        <div className='flex gap-2 items-center mb-3 '>
                            {data.icon}
                            {
                                data.link? (
                                    <Link to={`${data.link}`} className='text-white hover:opacity-80 text-base'>{data.content}</Link>
                                ): (
                                    <p className='text-white text-base'>{data.content}</p>
                                )
                            }
                            
                        </div>
                    ))
                }
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