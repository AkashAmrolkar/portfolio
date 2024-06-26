import { Link } from "react-router-dom"
import akash from '../assets/developer.svg'
import resume from '../assets/Akash-Amrolkar-Resume.pdf'
const About = () => {
  return (
    <div className=" py-16 px-4 bg-[#161922]" id="about">
      <div className="w-full md:w-3/4 mx-auto">
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-6">
            <h2 className=" text-4xl font-bold mb-8 text-primary title_bfr_efc relative pl-14">About Me</h2>
            <div className="text-white text-lg mb-8">Highly skilled Full Stack Developer with 3 years of experience in designing, developing, and maintaining web applications. Proficient in front-end technologies including HTML, CSS, Bootstrap, JavaScript, React, Next.js, and Redux, and back-end technologies like PHP, Node.js, and Express.js. Experienced in database management with MongoDB and MySQL, and adept at using CMS platforms such as WordPress and Shopify. Strong in RESTful API development, responsive web design, and version control with Git. Proven track record of optimizing application performance, debugging, and troubleshooting. Effective communicator and collaborator with a strong problem-solving aptitude.</div>
            <div className="flex flex-wrap gap-5 items-center mb-8">
              <Link to='#contact' className="rounded-md bg-primary px-5 py-3 text-secondary font-semibold hover:text-secondary">Hire Me</Link>
              <a href={resume} rel='noreferrer' target='_blank' className=' rounded-md bg-primary px-5 py-3 w-fit text-secondary font-semibold'>Download Resume</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
              <img src={`${akash}`} height='400' width='400' loading="lazy" alt="about-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About