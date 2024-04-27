'use client';

import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { fadeIn } from '../../../variants';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='pt-20 bg-white z-20' id='contact'>
      <div className='container mx-auto mb-24'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
        >
          <div className='flex flex-col flex-1 gap-y-8'>
            <Link to='home' smooth={true} spy={true} className='cursor-pointer'>
              <Image src={'/assets/icons/logo.png'} alt='' width={200} height={200} />
            </Link>
            <div className='text-secondary'>
              Ut sint nostrud sunt esse nostrud. Elit deserunt excepteur commodo dolor.
            </div>
            <div className='flex flex-col gap-y-4 font-semibold'>
              <div className='flex items-center gap-x-[10px]'>
                <FaPhone className='text-accent' />
                <div className='font-medium'>(000)000 0000 000</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <FaEnvelope className='text-accent' />
                <div className='font-medium'>example@gmail.com</div>
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <h3 className='h3 font-bold mb-8'>
                Company
              </h3>
              <ul className='flex flex-col gap-y-4 font-semibold'>
                <li>
                  <a href=''>Mykolaiv</a>
                </li>
                <li>
                  <a href=''>Careers</a>
                </li>
                <li>
                  <a href=''>Mobile</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
                <li>
                  <a href=''>How we work</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className='h3 font-bold mb-8'>
              Working Hours
            </h3>
            <div className='flex flex-col gap-y-4'>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>Mon-Fri:</div>
                <div className='font-semibold'>08:00 AM - 09:00 PM</div>
              </div>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>Sat:</div>
                <div className='font-semibold'>09:00 AM - 07:00 PM</div>
              </div>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>Sun:</div>
                <div className='font-semibold'>Closed</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='h3 font-bold mb-8'>
              Newsletter
            </h3>
            <div className='mb-9 text-secondary'>
              Incididunt quis ea tempor sit reprehenderit elit magna.
            </div>
            <form className='flex gap-x-2 h-14'>
              <input 
                type='text' 
                placeholder='Your email' 
                className='outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent' 
              />
              <button type='submit' className='btn btn-sm btn-accent w-24'>
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
