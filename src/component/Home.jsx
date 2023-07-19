import Logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="py-5 md:columns-2 md:flex justify-normal items-center">
        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="subheading">
            <p className="text-black text-sm font-semibold">Hello There...</p>
          </div>
          <h1 className="text-4xl font-medium capitalize">Akash Amrolkar</h1>
          <h2 className='ext-lg font-medium text-black'>I Am Passionate <span className='type-write'> Developer</span></h2>
          <div className="font-light text-gray-500 text-base ">The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</div>
          <div className='flex flex-col md:flex-row gap-4'>
          <button className=' bg-black text-white uppercase text-sm font-medium px-6 py-2 w-fit'>my work</button>
          <button className=' bg-white text-black border-2 uppercase text-sm font-medium px-6 py-2 w-fit'>my work</button>
          </div>
        </div>

        <div className="flex justify-center items-center md:w-1/2 ">
          <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Home