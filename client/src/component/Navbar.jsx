import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const openMenuHandler = () => {
    setMenuOpen(true)
  }
  const closeMenuHandler = () => {
    setMenuOpen(false)
  }

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // Set the state based on whether the user has scrolled down
    setIsScrolled(scrollTop > 40);
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuLists = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Skills',
      link: '/skills'
    },
    {
      title: 'Experience',
      link: '/experience'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]
  const background = {
    backgroundImage: `url(${Logo})`
  }

  return (
    <>
      <nav className={`${isScrolled ? 'fixed' : ''} bg-black py-4 w-full transition-all duration-1000`}>
        <div className=" container mx-auto px-4">
          <div className="flex justify-between align-middle items-center">
            <div className="logo-box w-[80px] h-[80px] bg-no-repeat bg-cover bg-blend-difference bg-white" style={background}></div>

            <div className='mobile_menu md:hidden'>
              {
                !menuOpen && <IoMdMenu className='text-white hover:opacity-70 text-3xl' onClick={openMenuHandler} />
              }
              {
                menuOpen && <IoMdClose className='text-white hover:opacity-70 text-3xl' onClick={closeMenuHandler} />
              }
            </div>
            <div className={'list-items hidden md:flex gap-4 items-center'}>
              {
                menuLists.map((menu, index) => (
                  <NavLink to={menu.link} key={index} className=' text-white hover:opacity-70 text-xl'>{menu.title}</NavLink>
                ))
              }
            </div>
            <div className='hidden md:flex gap-4 items-center'>
              <Link to='#'><FaLinkedin className='text-white hover:opacity-70 text-3xl' /></Link>
              <Link to='#'><FaInstagram className='text-white hover:opacity-70 text-3xl' /></Link>
              <Link to='#'><FaGithub className='text-white hover:opacity-70 text-3xl' /></Link>
            </div>
          </div>
        </div>
      </nav>
      {
        menuOpen &&
        <nav className={`${isScrolled ? 'fixed' : ''} bg-black w-full transition-all duration-1000 relative`}>
          <div className={`${isScrolled ? 'top-40' : 'top-0'} mobile-menu container mx-auto px-4 py-4 absolute bg-white w-11/12 shadow-lg border-transparent`}>
            <div className='flex flex-col gap-4'>
              <div className={'list-items md:hidden flex flex-col gap-4 items-start'}>
                {
                  menuLists.map((menu, index) => (
                    <NavLink to={menu.link} key={index} className=' text-black hover:opacity-70 text-xl'>{menu.title}</NavLink>
                  ))
                }
              </div>
              <div className='flex gap-4 items-center md:hidden'>
                <Link to='#'><FaLinkedin className='text-black hover:opacity-70 text-3xl' /></Link>
                <Link to='#'><FaInstagram className='text-black hover:opacity-70 text-3xl' /></Link>
                <Link to='#'><FaGithub className='text-black hover:opacity-70 text-3xl' /></Link>
              </div>
            </div>
          </div>
        </nav>
      }
    </>

  )
}

export default Navbar