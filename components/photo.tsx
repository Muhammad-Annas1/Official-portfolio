'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className="flex items-center justify-center  w-full h-full mt-8 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: 'easeIn' } }}
        className="relative flex items-center justify-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.4, ease: 'easeIn' } }}
          className="absolute z-40"
        >
          <Image
            src="/Logo.png"
            height={150}
            width={150}
            alt="profile"
            className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
          />
        </motion.div>

        {/* Animated Circle and Path with Rotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' } }}
          className="relative flex items-center justify-center"
        >
          <motion.svg
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: 1,
              rotate: [0, 360], // Rotation animation
            }}
            transition={{
              duration: 20, // Speed of rotation
              repeat: Infinity, // Infinite repeat
              repeatType: 'reverse', // Reverse rotation animation
              ease: 'linear', // Continuous smooth rotation
            }}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-96 xl:h-96"
            viewBox="0 0 537 537"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path 1 */}
            <motion.path
              d="M156.815 121.725C159.44 124.929 158.97 129.655 155.766 132.28C152.562 134.905 147.836 134.435 145.211 131.231C142.586 128.026 143.056 123.301 146.26 120.676C149.465 118.051 154.19 118.521 156.815 121.725Z"
              fill="#274FB2"
            />
            {/* Path 2 */}
            <motion.path
              d="M389.242 407.037C391.866 410.241 391.397 414.967 388.193 417.591C384.988 420.216 380.263 419.747 377.638 416.542C375.013 413.338 375.483 408.613 378.687 405.988C381.891 403.363 386.617 403.833 389.242 407.037Z"
              fill="#274FB2"
            />
            {/* Outer Circle */}
            <circle
              cx="267.683"
              cy="268.113"
              r="183"
              stroke="#274FB2"
              strokeOpacity="0.7"
              strokeWidth="2"
            />
            {/* Inner Circle */}
            <circle
              cx="268"
              cy="268"
              r="254"
              stroke="#274FB2"
              strokeOpacity="0.9"
              strokeWidth="2"
            />
            {/* Path 3 */}
            <motion.path
              d="M520.634 279.082C514.761 277.528 511.26 271.507 512.815 265.634C514.369 259.761 520.39 256.26 526.263 257.815C532.136 259.369 535.637 265.39 534.082 271.263C532.528 277.136 526.507 280.637 520.634 279.082Z"
              fill="#274FB2"
            />
            {/* Path 4 */}
            <motion.path
              d="M10.6338 279.082C4.76093 277.528 1.26011 271.507 2.81453 265.634C4.36895 259.761 10.39 256.26 16.2629 257.815C22.1358 259.369 25.6366 265.39 24.0822 271.263C22.5278 277.136 16.5067 280.637 10.6338 279.082Z"
              fill="#274FB2"
            />
            {/* Path 5 */}
            <motion.path
              d="M279.082 16.2629C277.528 22.1358 271.507 25.6366 265.634 24.0822C259.761 22.5278 256.26 16.5067 257.815 10.6338C259.369 4.76093 265.39 1.26011 271.263 2.81453C277.136 4.36895 280.637 10.39 279.082 16.2629Z"
              fill="#274FB2"
            />
            {/* Path 6 */}
            <motion.path
              d="M279.082 526.263C277.528 532.136 271.507 535.637 265.634 534.082C259.761 532.528 256.26 526.507 257.815 520.634C259.369 514.761 265.39 511.26 271.263 512.815C277.136 514.369 280.637 520.39 279.082 526.263Z"
              fill="#274FB2"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
