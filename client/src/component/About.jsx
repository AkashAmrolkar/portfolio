import { Link } from "react-router-dom"
import akash from '../assets/Akash.jpg'
import resume from '../assets/Akash-Amrolkar-Resume.pdf'
const About = () => {
  return (
    <div className=" py-16 px-4 bg-[#161922]">
      <div className="w-full md:w-3/4 mx-auto">
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-6">
            <h2 className=" text-4xl font-bold mb-8 text-primary title_bfr_efc relative pl-14">About Me</h2>
            <div className="text-white text-lg mb-8">Hi! I'm Akash Amrolkar, a passionate Full Stack Developer with a love for creating dynamic, responsive, and user-friendly web applications. With a solid foundation in both front-end and back-end technologies, I enjoy transforming complex problems into intuitive, accessible, and efficient solutions.</div>
            <div className="flex flex-wrap gap-5 items-center mb-8">
              <Link to='#contact' className="rounded-md bg-primary px-5 py-3 text-secondary font-semibold hover:text-secondary">Hire Me</Link>
              <a href={resume} rel='noreferrer' target='_blank' className=' rounded-md bg-primary px-5 py-3 w-fit text-secondary font-semibold'>Download Resume</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
              <img src={`${akash}`} height='200' width='200' loading="lazy" alt="about-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About