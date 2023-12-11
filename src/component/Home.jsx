import Banner from '../assets/Banner.jpg';
import resume from '../assets/Akash-Amrolkar-Resume.pdf'

const Home = () => {
  const style = {
    backgroundImage: `url(${Banner})`,

  }
  return (
    <div className=' bg-no-repeat bg-cover bg-center' style={style}>
      <div className='container mx-auto px-4 py-10 md:py-40'>
        <div className="flex flex-col justify-center items-center gap-8 w-full md:w-3/5 mx-auto">
          <div className="subheading">
            <p className="text-white text-xl font-semibold text-center">Hello there, I'm so happy you are here 😊</p>
          </div>
          <div>
            <h1 className="text-5xl font-medium capitalize mb-3 text-center">I'm Akash Amrolkar,</h1>
            <h2 className='ext-lg font-medium text-black text-3xl text-center'>A Passionate <span className='type-write text-center'> Fullstack Developer</span></h2>
          </div>
          <div className="font-light text-white text-2xl leading-8 text-center mb-5">Highly skilled Developer with 2.6+ years of experience in building web applications with HTML, CSS, JavaScript, Reactjs, Nodejs, Wordpress, Shopify and some other cool libraries and frameworks.</div>
          <div className=''>
            <a href={resume} rel='noreferrer' target='_blank' className='bg-black text-white px-8 py-4 font-medium border border-transparent rounded-2xl hover:bg-white hover:border hover:text-black hover:border-white hover:font-medium transition duration-200 ease-in-out]'>Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home