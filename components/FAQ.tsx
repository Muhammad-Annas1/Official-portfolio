'use client'

import Image from 'next/image'
import { animate, motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import FadeIn from '@/lib/variants'

import { askedQuestions } from '@/lib/data'

const slideVariant = {
  initial: {
    x: 0
  },
  animate: {
    x: '-50%'
  }
}

export const tech = [
  
  {
    src: '/tech/node.svg',
    width: 106.2,
    height: 31,
    alt: 'node js'
  },
  {
    src: '/tech/ts.svg',
    width: 46.14,
    height: 45.24,
    alt: 'typescript'
  },


  {
    src: '/tech/react.svg',
    width: 54.98,
    height: 48.73,
    alt: 'react'
  },
  {
    src: '/tailwind.png',
    width: 54.98,
    height: 48.73,
    alt: 'tailwind'
  },
  {
    src: '/icon.png',
    width: 54.98,
    height: 48.73,
    alt: 'react'
    
  },
  {
    src: '/html.png',
    width: 54.98,
    height: 48.73,
    alt: 'html'
    
  },
  {
    src: '/javascript.png',
    width: 54.98,
    height: 48.73,
    alt: 'javascript'
    
  },
  {
    src: '/graphic.png',
    width: 54.98,
    height: 48.73,
    alt: 'graphic design'
    
  },
  {
    src: '/css.png',
    width: 54.98,
    height: 48.73,
    alt: 'content writing'
    
  },
 
 
]

const FAQ = () => {
  return (
    <section className='bg-secondary pb-20 pt-36' id='FAQ'>
      <div className='container sm:px-2'>
        <div>
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
            Frequently <br /> <span className='under-line text-blue-400'>asked</span>
          </h1>
        </div>
        <motion.div
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className='mx-auto mt-12 flex max-w-3xl flex-col justify-center rounded-md bg-primary py-8 sm:px-2 xl:py-4'>
            {askedQuestions.map(qst => (
              <Accordion
                type='single'
                collapsible
                className='w-full text-left'
                key={qst.id}
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='mx-2 text-xl font-medium hover:no-underline'>
                    {qst.qs}
                  </AccordionTrigger>
                  <AccordionContent className='px-2 pt-4 text-[16px] leading-6'>
                    {qst.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </div>
      <div className='center mt-36 flex justify-center py-4'>
        <div className='flex w-full max-w-[1200px] items-center justify-center overflow-x-hidden'>
          <div className='right-0 z-40 h-full w-[150px] bg-opacity-20 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/0' />
          <motion.div
            variants={slideVariant}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            initial='initial'
            animate='animate'
            className='center flex space-x-12'
          >
            {tech.map(item => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            ))}
            {tech.map(item => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            ))}
          </motion.div>
          <div className='right-0 z-40 h-full w-[150px] bg-gradient-to-l from-secondary via-secondary/90 to-secondary/0' />
        </div>
      </div>
    </section>
  )
}
export default FAQ
