import React from 'react'
import EmailForm from './EmailForm'
import GetInTouch from './GetInTouch'

const ContactUs = () => {
    return (
        <div className='py-16 px-4 bg-secondary'>
            <div className=' w-full md:w-3/4 mx-auto'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 md:col-span-6'>
                        <h2 className='text-white font-bold text-3xl mb-5'>Send Message Us</h2>
                        <EmailForm />
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <h2 className='text-white font-bold text-3xl mb-5'>Get in Touch</h2>
                        <GetInTouch />
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default ContactUs