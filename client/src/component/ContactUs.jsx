import React from 'react'
import EmailForm from './EmailForm'
import GetInTouch from './GetInTouch'

const ContactUs = () => {
    return (
        <div className='container py-20 mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <h2 className='text-black font-bold text-3xl mb-5'>Send Message Us</h2>
                    <EmailForm />
                </div>
                <div>
                    <h2 className='text-black font-bold text-3xl mb-5'>Get in Touch</h2>
                    <GetInTouch />
                </div>
            </div>
        </div>
    )
}

export default ContactUs