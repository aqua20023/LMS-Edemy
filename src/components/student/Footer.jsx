import React from 'react'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
     <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
      <div className='flex flex-col md:items-start items-start w-full'>
        <img src={assets.logo_dark} alt="logo" />
        <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>
      <div className='flex flex-col md:items-start items-start w-full'>
        <h2 className='font-semibold text-white mb-5'>Company</h2>
        <ul className='flex md:flex-col text-white/80 justify-between w-full  text-sm md:space-y-2'>
          <li><a href="#" className=''>Home</a></li>
          <li><a href="#" className=''>About us</a></li>
          <li><a href="#" className=''>Contact us</a></li>
          <li><a href="#" className=''>Privacy policy</a></li>
        </ul>
      </div>
      <div className='hidden md:flex flex-col items-start w-full'>
        <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
        <p className='text-sm text-white/80 '>The latest news, articles, and resources, sent to your inbox weekly.</p>
        <div className='flex items-start gap-2 pt-4'>
        <input type="email" placeholder='Enter your email' 
        className='border border-grey-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none  w-64 h-9 rounded px-2 text-sm'/>
        <button className='bg-green-600 w-24 h-9 text-white rounded'>Subscribe</button>
        </div>
      </div>
     </div>
     <p className='py-4 text-xs text-center md:text-sm text-white/60'>Copyright 2024 © GreatStack. + Jai has built it himself by taking greatstack as reference All Right Reserved.</p>
    </footer>
  )
}

export default Footer
