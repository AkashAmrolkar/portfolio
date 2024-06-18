import React from 'react'
import EmailForm from './EmailForm'
import GetInTouch from './GetInTouch'

const ContactUs = () => {
    return (
        <div className='py-16 px-4 bg-secondary' id='contact'>
            <div className=' w-full md:w-3/4 mx-auto'>
                <div className='flex justify-center'>
                    <h2 className=" text-4xl text-center w-fit font-bold mb-10 text-primary title_bfr_efc relative pl-14">Contact Me</h2>
                </div>
                <div className='block md:flex gap-10'>
                    <div className='mb-8 flex-1'>
                        <h2 className='text-white font-bold text-3xl mb-5'>Hire Me</h2>
                        <EmailForm />
                    </div>
                    <div className='mb-8 flex-1'>
                        <h2 className='text-white font-bold text-3xl mb-5'>Get in Touch</h2>
                        <GetInTouch />
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default ContactUs