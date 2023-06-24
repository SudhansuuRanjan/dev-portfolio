"use client";
import React, { useRef, useEffect } from 'react';
import NavBar from '@/components/NavBar'
import Projectcard from '@/components/Homepage/projects/Projectcard';
const locomotiveScroll =
    typeof window !== `undefined` ? require("locomotive-scroll").default : null;

export default function Home(): React.JSX.Element {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    let lscroll: any;

    useEffect(() => {
        if (!scrollRef.current) return;

        // @ts-ignore
        lscroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            reloadOnContextChange: true,
            multiplier: 0.75,
            inertia: 0.5,
            lerp: 0.05,
            smartphone: {
                smooth: true,
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
    },[])


    return (
        <div className="min-h-screen subpixel-antialiased w-full py-10 relative lg:px-24 md:px-16 px-6">
            <NavBar />
            <div data-scroll-container ref={scrollRef} className='is-reveal pt-36 pb-16 z-0 m-auto lg:w-[58rem] md:w-[90%]'>
                <div className=''>
                    <h1 className='font-extrabold lg:text-7xl md:text-6xl text-5xl  text-white lg:mb-5 md:mb-5 mb-5'>Yeah, I work hard</h1>
                    <h1 className='font-extrabold lg:text-7xl md:text-6xl text-5xl text-white lg:mb-5 md:mb-5 mb-5'>Each project is unique.</h1>
                    <h1 className='font-extrabold lg:text-7xl md:text-6xl h-32 text-5xl bg-clip-text text-transparent bg-gradient-to-l from-pink-600 to-purple-500'>Here are my works.</h1>
                </div>

                <div className='flex my-16 flex-col items-center justify-center gap-16'>
                    <Projectcard id="1" />
                    <Projectcard id="2" />
                    <Projectcard id="3" />
                </div>
            </div>
        </div>
    )
}
