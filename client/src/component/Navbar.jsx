import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

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
  ];

  return (
    <nav className={`bg-[#191d28] py-4 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className='text-primary font-bold text-4xl'>Akash</div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-4 items-center'>
            {menuLists.map((menu, index) => (
              <li
                key={index}
                className='text-white transition duration-300 ease-in-out transform hover:scale-105'
              >
                <Link
                  to={menu.link}
                  className={`hover:text-primary ${
                    index === menuLists.length - 1
                      ? 'rounded-md bg-primary px-5 py-3 text-secondary font-semibold hover:text-secondary'
                      : ''
                  }`}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            {openMenu ? (
              <IoMdClose
                className='text-white h-10 w-10 cursor-pointer'
                onClick={handleMenuToggle}
              />
            ) : (
              <IoMdMenu
                className='text-white h-10 w-10 cursor-pointer'
                onClick={handleMenuToggle}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-16 right-0 bg-[#191d28] z-50 w-full transform ${openMenu ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'}`}>
          <div className='py-4'>
            <ul className='text-left'>
              {menuLists.map((menu, index) => (
                <li
                  key={index}
                  className='text-white mb-4 transition duration-300 ease-in-out transform hover:scale-105'
                >
                  <Link
                    to={menu.link}
                    className={`block py-2 px-4 rounded-md hover:bg-primary hover:text-secondary ${
                      index === menuLists.length - 1
                        ? 'mt-2 ml-4 rounded-md bg-primary px-5 py-3 w-fit text-secondary font-semibold'
                        : ''
                    }`}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
