import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { BsFillBagPlusFill } from "react-icons/bs";
import walstarLogo from '../assets/walstar.png'
import wpoetsLogo from '../assets/wpoets.png'
import Card from './Card';

const Resume = () => {
    const experience = [
        {
            date: 'Sept 2023 - Present',
            title: 'Wpoets Technology LLP',
            img: wpoetsLogo,
            content: 'With a comprehensive skill set in full-stack development, I am adept at creating responsive, user-friendly web applications. My ability to integrate front-end and back-end technologies allows me to deliver cohesive and high-performing web solutions. Whether designing intuitive interfaces or developing robust server-side logic, I am committed to providing high-quality results that meet both user needs and business objectives.',
            position: 'Full Stack Developer'
        },
        {
            date: 'June 2021 - Aug 2023',
            title: 'Walstar Technology Pvt Ltd',
            img: walstarLogo,
            content: 'Highly skilled Web Developer with a strong foundation in HTML, CSS, and JavaScript, complemented by extensive experience in modern front-end frameworks like React. Proficient in implementing content management systems such as WordPress and Shopify, enabling efficient client content management. Demonstrates the ability to deliver projects within tight deadlines while managing multiple tasks. Strong collaboration skills with a focus on understanding client objectives and providing technical expertise throughout the development lifecycle. Experienced in project planning and mentoring junior developers.',
            position: 'Senior Web Developer'
        }
    ]
    const educations = [
        {
            date: 'Aug 2016 - May 2020',
            title: 'BE (CSE)',
            content: '',
            position: 'Shivaji University, Kolhapur'
        },
        {
            date: '2016',
            title: 'HSC',
            content: '',
            position: 'MSBSHSE'
        },
        {
            date: '2014',
            title: 'SSC',
            content: '',
            position: 'MSBSHSE'
        }
    ]
  return (
    <div className=" py-16 px-4 bg-secondary">
        <div className="w-full md:w-3/4 mx-auto">
        <div className='flex justify-center'>
            <h2 className=" text-4xl text-center w-fit font-bold mb-10 text-primary title_bfr_efc relative pl-14">Resume</h2>
        </div> 
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6">
                <div className='flex gap-4 justify-center'>
                    <BsFillBagPlusFill className='text-primary h-10 w-10' />
                    <h3 className='text-primary font-bold text-4xl mb-8'>Experience</h3>                    
                </div>                
                {
                    experience.map((exp, index)=>(
                        <Card data={{...exp}} key={index} />
                    ))
                }
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className='flex gap-4 justify-center'>
                    <FaBookOpen className='text-primary h-10 w-10' />
                    <h3 className='text-primary font-bold text-4xl mb-8'>Education</h3>
                </div>
                {
                    educations.map((edu, index)=>(
                        <Card data={{...edu}} key={index} />
                    ))
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Resume