'use client'

import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import Social from '@/components/social'

const Footer = () => {
  return (
    <section className='bg-secondary py-8'>
      <div className='container flex flex-col items-center justify-between gap-4 text-center xl:flex-row xl:text-left'>
        
        {/* Left: Footer Text */}
        <p className='text-sm md:text-lg lg:text-lg font-semibold xl:ml-0'>
          Build With ❤️ By Muhammad Annas | All Rights Reserved | &copy;2025
        </p>

       

        {/* Right: Social Icons */}
        <div className="flex justify-end w-full xl:w-auto mr-32 lg:mr-10">
          <Social />
        </div>

      </div>
    </section>
  )
}

export default Footer
