import Home from '../component/Home'
import About from '../component/About'
import ContactUs from '../component/ContactUs'
import Skills from '../component/Skills'
import Resume from '../component/Resume'
import Socials from '../component/Socials'

const MainPage = () => {
  return (
    <div className='relative'>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Socials />
    </div>
  )
}

export default MainPage