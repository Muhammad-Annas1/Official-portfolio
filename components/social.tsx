import { FaGithub, FaLinkedin, FaWhatsapp,  } from 'react-icons/fa'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { SiFiverr } from 'react-icons/si'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/Muhammad-Annas1'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/muhammad-annas-1266652a1/'
  },
  {
    icon: <FaWhatsapp />,
     path: 'https://wa.me/923333521650'
  },
  {
    icon: <SiFiverr className='text-2xl' />,
    path: ' https://www.fiverr.com/frelancer_anas'
  }
  
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
