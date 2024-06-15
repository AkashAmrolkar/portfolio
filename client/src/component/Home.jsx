import Banner from '../assets/Banner.jpg';
import resume from '../assets/Akash-Amrolkar-Resume.pdf'
import Typewriter from './TypeWriter'
const Home = () => {
  const style = {
    backgroundImage: `url(${Banner})`,

  }
  return (
    <div className=' bg-no-repeat bg-cover bg-center py-10 md:h-screen grid bg-secondary'>
      <div className='container mx-auto px-4 py-10 md:py-40'>
        <div className="flex flex-col justify-center items-center gap-8 w-full md:w-3/5 mx-auto">
          <div className="subheading">
            <p className="text-white text-xl font-semibold text-center">Hello there, I'm so happy you are here 😊</p>
          </div>
          <div>
            <h1 className=" text-6xl font-bold capitalize mb-5 text-center text-white">I'm <span className=' text-primary'>Akash Amrolkar</span>,</h1>
           <Typewriter  text="Full Stack Developer" speed={150} />
          </div>
          <div className='mt-10'>
            <a href={resume} rel='noreferrer' target='_blank' className=' rounded-md bg-primary px-5 py-3 w-fit text-secondary font-semibold'>Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home