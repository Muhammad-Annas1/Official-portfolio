'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary mt-8'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col gap-12 px-2 lg:flex-row lg:px-0'>

          {/* Left Section */}
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView='show'  // ✅ BACK TO whileInView
            viewport={{ once: false, amount: 0.5 }}  // ✅ FIXED: 'amount' adjust kiya
            className='w-full flex flex-col gap-8 lg:w-1/2 lg:mr-8'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem]'>
              Services I <span className='under-line text-blue-400'>Provide </span>!
            </h1>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase '>Projects</p>
                <p className='text-[36px] font-bold text-blue'>
                  + <AnimatedCounter from={0} to={15} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>Satisfied Clients</p>
                <p className='text-[36px] font-bold text-blue'>
                  + <AnimatedCounter from={0} to={10} />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView='show'  // ✅ BACK TO whileInView
            viewport={{ once: false, amount: 0.5 }}  // ✅ FIXED: viewport tuning
            className='w-full flex flex-col gap-6 lg:w-1/2'
          >
            {[  
              { id: '01', title: 'Front-end Development', desc: 'Building responsive and interactive web applications using Next.js, React, Tailwind CSS, and TypeScript.' },
              { id: '02', title: 'Graphic Designing', desc: 'Creating visually appealing designs, logos, banners, business cards, flyers, and social media graphics etc.' },
              { id: '03', title: 'Content Writing', desc: 'I provide content writing services, including blog writing, articles, and technical writing for brand visibility and audience engagement.' }
            ].map((service) => (
              <div key={service.id} className='flex flex-col items-start space-y-4 bg-primary p-4 md:flex-row md:items-center md:space-x-6 md:space-y-0'>
                <p className='text-5xl font-bold text-blue'>{service.id}</p>
                <div>
                  <h2 className='mb-2 text-2xl font-bold'>{service.title}</h2>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Services
