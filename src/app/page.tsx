"use client";
import { useRef } from 'react';
import useLocomotive from '@/hooks/useLocomotive';
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Homepage/Hero'
import About from '@/components/Homepage/About'
import Project from '@/components/Homepage/projects/Project';
import Skills from '@/components/Homepage/skills/Skills';
import Blogs from '@/components/Homepage/blogs/Blogs';
import Contact from '@/components/Homepage/Contact';

export default function Home() {

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [locomotiveRef] = useLocomotive({
    ref: scrollRef,
    smooth: true,
    class: 'is-reveal'
  })


  return (
    <div className="min-h-screen subpixel-antialiased w-full py-10 relative lg:px-24 md:px-16 px-6">
      <NavBar />
      <div data-scroll-container ref={scrollRef} className='pt-36 pb-16 z-0 m-auto lg:w-[58rem] md:w-[90%]'>
        <Hero />
        <About />
        <Project />
        <Blogs/>
        <Skills />
        <Contact/>
        <Footer />
      </div>
    </div>
  )
}
