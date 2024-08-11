"use client";
import React, { useRef, useEffect } from 'react';
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Homepage/Hero'
import About from '@/components/Homepage/About'
import Project from '@/components/Homepage/projects/Project';
import Skills from '@/components/Homepage/skills/Skills';
import Blogs from '@/components/Homepage/blogs/Blogs';
import Contact from '@/components/Homepage/Contact';
import HireMe from '@/components/Homepage/hireme/HireMe';
const locomotiveScroll = typeof window !== `undefined` ? require("locomotive-scroll").default : null;

export default function Home(): React.JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const lscrollRef = useRef<any>(null); // Create a ref to store lscroll

  useEffect(() => {
    let lscroll: any; // Declare lscroll inside the useEffect hook

    const initializeScroll = () => {
      if (!scrollRef.current) return;

      lscroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        reloadOnContextChange: true,
        multiplier: 0.75,
        inertia: 0.5,
        lerp: 0.05,
        smartphone: {
          smooth: true,
          multiplier: 1,
          inertia: 0.5,
          lerp: 0.1,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      });

      // update locomotive scroll
      window.addEventListener("load", () => {
        lscroll.update();
      });

      lscrollRef.current = lscroll; // Assign lscroll to the ref
    };

    initializeScroll();

    return () => {
      // Clean up the scroll instance when the component unmounts
      if (lscrollRef.current) {
        lscrollRef.current.destroy();
        lscrollRef.current = null;
      }
    };
  }, []);


  return (
    <div className="subpixel-antialiased w-full lg:py-10 md:py-9 py-5 relative lg:px-24 md:px-16 px-5">
      <NavBar />
      <div
        // data-scroll-container 
        // ref={scrollRef} 
        className='is-reveal pt-36 z-0 m-auto lg:w-[58rem] md:w-[90%]'>
        <Hero />
        <About />
        <Project />
        <Blogs />
        <Skills />
        <HireMe />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
