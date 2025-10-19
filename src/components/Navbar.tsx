'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { menuData } from '@/dataAndTypes/navbar';
import SwitchLanguage from './SwitchLanguage';
import { useLangStore } from '@/store/useLangStore';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const lang = useLangStore((s) => s.lang);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className='absolute w-full  z-50 transition-all duration-300 font-poppins'>
      <div className='container mx-auto px-4 sm:px-6  flex items-center justify-between h-16 md:h-20'>
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className='flex items-center'
        >
          <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-[#ff6f00] via-[#ff8f00] to-[#ffa000] flex items-center justify-center text-white font-bold text-xl mr-3'>
            P
          </div>
          <span
            className='text-xl font-bold bg-[linear-gradient(to_right,#6758c5,#ae67fa,#f49867,#6758c5)] bg-[length:200%_auto] bg-clip-text text-transparent animate-textclip'
            onClick={scrollToTop}
          >
            Pongsathon
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex space-x-8'>
          {menuData.map((item, index) => (
            <motion.a
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className='relative text-black
    hover:bg-gradient-to-r hover:from-[#5f3dc4] hover:via-[#ae67fa] hover:to-[#f49867]
    hover:bg-clip-text hover:text-transparent
    font-medium transition-colors duration-300 group'
              href={`#${item.toId}`}
            >
              {lang === 'en' ? item.name_en : item.name_th}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300' />
            </motion.a>
          ))}
        </nav>

        {/* Social icons - Desktop */}
        <div className='hidden lg:flex items-center space-x-4'>
          {/* {socialLinks.map((item) => {
            return (
              <motion.a
                key={item.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className='text-gray-700 dark:text-gray-300 hover:text-violet-300  transition-colors duration-300'
                href={item.link}
              >
                <item.Icon className='w-5 h-5' />
              </motion.a>
            );
          })} */}

          {/* Language switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className='flex items-center ml-3!'
          >
            <SwitchLanguage />
          </motion.div>

          {/* Hire Me Button */}
          {/* <motion.a
            href='#contact'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-br from-[#ff6f00] via-[#ff8f00] to-[#ffa000] text-white font-bold hover:scale-110 hover:shadow-lg transition-all duration-300'
          >
            Hire Me
          </motion.a> */}
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center'>
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className='text-black'
          >
            {isOpen ? (
              <FiX className='h-6 w-6' />
            ) : (
              <FiMenu className='h-6 w-6' />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className='lg:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5'
      >
        <nav className='flex flex-col space-y-3'>
          {menuData.map((item) => {
            return (
              <a
                key={item.id}
                onClick={toggleMenu}
                className='text-black font-medium py-2'
                href={`#${item.toId}`}
              >
                {lang === 'en' ? item.name_en : item.name_th}
              </a>
            );
          })}
        </nav>
        <SwitchLanguage />
      </motion.div>
    </header>
  );
}
export default Navbar;
