import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
    <nav className='bg-[#191d28] py-4'>
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
                      ? 'rounded-md bg-primary px-5 py-3 text-secondary hover:text-secondary'
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
                        ? 'mx-4 mt-2 rounded-3xl bg-primary w-fit px-5 py-3 text-secondary'
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
