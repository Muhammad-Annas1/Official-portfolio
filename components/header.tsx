'use client'

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/nav'
import MobileNav from '@/components/mobileNav'

const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-primary py-6 xl:py-8'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <ScrollLink to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image src='/A.jpg' height={60.55} width={100.35} alt='logo' className='text'  />
        </ScrollLink >

        {/* desktop nav */}
        <div className='hidden items-center gap-x-8 xl:flex'>
          <Nav />
          <Link
            href="https://www.linkedin.com/in/muhammad-annas-1266652a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80"
          >
            Hire me
          </Link>
        </div>

        {/* mobile nav */}
        <div className='z-50 xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
