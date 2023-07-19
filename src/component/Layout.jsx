import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
const Layout = () => {
  return (
    <div className='container mx-auto px-4'>
        <Navbar />
        <Home />
        <Services />
    </div>
  )
}

export default Layout