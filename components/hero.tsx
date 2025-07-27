import { Download } from 'lucide-react'
import Link from 'next/link'
import Social from '@/components/social'
import Photo from '@/components/photo'

const Hero = () => {
  return (
    <section className="w-full pt-20 md:pt-40  ">
      <div className="container mx-auto flex flex-col-reverse items-center lg:gap-52  px-6 md:flex-row md:px-12 xl:h-[600px]">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <span className="text-lg md:text-3xl">Hello, I&apos;m</span>
          <h1 className="text-3xl font-bold capitalize leading-snug md:text-5xl">
            Muhammad <br />
            <span className="under-line text-blue-400">Annas</span>
          </h1>
          <div className="py-6 text-lg md:text-xl">
            <p>
              Muhammad Annas is a multi-talented professional with expertise in Biomedical Engineering, Graphic Designing, and Frontend Development. Specializes in Next.js, React, Tailwind CSS, and TypeScript, as well as Python creating visually appealing and functional web applications. I offer freelancing services in Frontend Development, Graphic Designing, and Content Writing.
            </p>
          </div>

          {/* Buttons & Social Icons */}
          <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:items-start">
            <Link
              href="/CVs.pdf"  // CV ka path yahan dalen
              target="_blank"
              className="flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-2 text-sm font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-white md:px-8"
            >
              <span>Download Cv</span>
              <Download className="size-5" />
            </Link>

            {/* Social Icons */}
            <div className="mt-4 md:mt-0">
              <Social />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs md:w-1/2">
          <Photo />
        </div>
      </div>
    </section>
  )
}

export default Hero
