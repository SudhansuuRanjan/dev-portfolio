"use client";
import React, { useRef, useEffect } from 'react';
import NavBar from '@/components/NavBar'
import Projectcard from '@/components/Homepage/projects/Projectcard';
const locomotiveScroll =
    typeof window !== `undefined` ? require("locomotive-scroll").default : null;

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

    const projects = [
        {
            id: "01",
            title: 'KAIZEN 2023',
            desc: 'Official event and admin portal for KAIZEN 2023, the annual cultural fest of AIIMS Patna.',
            img: '/images/Kaizen-banner.png',
            link: 'https://www.kaizenaiimspatna.com/',
            tags: ['REACTJS', 'FIREBASE', 'TAILWIND CSS', 'SABPAISA'],
            github: 'https://github.com/SudhansuuRanjan/kaizen',
            readme: 'https://github.com/SudhansuuRanjan/kaizen#readme',
        },
        {
            id: "02",
            title: 'ANGELFACE',
            desc: 'Is is an UI design built for web3 peeps who want to get started in web3 frontend and are looking for projects to get inspired to build on.',
            img: '/images/angelface.png',
            link: 'https://angelface.vercel.app/',
            tags: ['REACTJS', 'REACT PARALLAX', 'TAILWIND', 'SNOWWALLET'],
            github: 'https://github.com/SudhansuuRanjan/angelhack-project',
            readme: 'https://github.com/SudhansuuRanjan/angelhack-project#readme',
        },
        {
            id: "03",
            title: 'SPOTISTAT',
            desc: 'A web app to get your Spotify stats and show them in a beautiful way.',
            img: '/images/spotistat.png',
            link: 'https://spotistat.vercel.app/',
            tags: ['REACT', 'NODE/EXPRESS', 'TAILWIND', 'SPOTIFY API'],
            github: 'https://github.com/SudhansuuRanjan/SpotiStat',
            readme: 'https://github.com/SudhansuuRanjan/SpotiStat#readme',
        },
        {
            id: "04",
            title: 'CAMPUS CRATE',
            desc: 'A (DAO) expertly designed to cultivate and expedite the ecosystem projects and ideas in the campuses.',
            img: '/images/campuscrate.png',
            link: 'https://campus-crate-kohl.vercel.app/',
            tags: ['REACT', 'TAILWIND', "THIRDWEB", "NODE/EXPRESS", "IPFS", "METAMASK"],
            github: 'https://github.com/Harshkumar62367/CampusCrate',
            readme: 'https://github.com/Harshkumar62367/CampusCrate#readme',
        },
        {
            id: "05",
            title: 'T.E.S.L.A CLUB',
            desc: "A website for the Tesla Club of NIT, Patna. It's a club for the students who are interested in the field of Electrical Engg. and blockchain.",
            img: '/images/tesla.png',
            link: 'https://tesla-nitp.vercel.app/',
            tags: ['REACTJS', 'TAILWINDCSS', "FIREBASE"],
            github: 'https://github.com/SudhansuuRanjan/tesla-nitp-web',
            readme: 'https://github.com/SudhansuuRanjan/tesla-nitp-web#readme',
        },
        {
            id: "06",
            title: 'TRUST MARKET',
            desc: "A decentralized marketplace for datasets, where data providers can sell their data and data consumers can buy them.",
            img: '/images/trustmarket.png',
            link: 'https://trust-market.vercel.app/',
            tags: ['REACTJS', 'TAILWINDCSS', "SOLIDITY", "IPFS", "METAMASK"],
            github: 'https://github.com/SudhansuuRanjan/TrustMarket',
            readme: 'https://github.com/SudhansuuRanjan/TrustMarket#readme',
        },
        {
            id: "07",
            title: 'CESC NITP',
            desc: "A website for the American Society of Civil Engineers Student Chapter of NIT Patna.",
            img: '/images/cesc.png',
            link: 'http://cescofficialweb.vercel.app/',
            tags: ['REACTJS', 'SCSS', "SANITY CMS"],
            github: 'https://github.com/SudhansuuRanjan/cescofficialweb',
            readme: 'https://github.com/SudhansuuRanjan/cescofficialweb#readme',
        },
        {
            id: "08",
            title: 'MY PORTFOLIO',
            desc: "My portfolio website built with NextJS and TailwindCSS.",
            img: '/images/portfolio.png',
            link: 'https://sudhanshur.vercel.app/',
            tags: ['NEXTJS', 'TAILWINDCSS', "LOCOMOTIVE SCROLL"],
            github: 'https://github.com/SudhansuuRanjan/dev-portfolio',
            readme: 'https://github.com/SudhansuuRanjan/dev-portfolio#readme',
        },
        {
            id: "09",
            title: 'ALUMNI CELL NITP',
            desc: "Official alumni portal of NIT Patna. It is a platform for the alumni to connect with their alma mater.",
            img: '/images/alumni.png',
            link: 'https://alumini-nitp.vercel.app/',
            tags: ['REACTJS', 'TAILWINDCSS', "FIREBASE"],
            github: 'https://github.com/SudhansuuRanjan/alumini-cell-nitp/tree/main',
            readme: 'https://github.com/SudhansuuRanjan/alumini-cell-nitp/tree/main#readme',
        },
        {
            id: "10",
            title: 'ROBOTICS CLUB NITP',
            desc: "Official website of Robotics Club NIT Patna. It is a platform for the students to connect with the club.",
            img: '/images/robotics.png',
            link: 'https://roboticsnitp.co.in/',
            tags: ['REACTJS', 'CSS', "SANITY CMS"],
            github: 'https://github.com/Robotics-Club-NIT-Patna/roboticsclubnitpweb',
            readme: 'https://github.com/Robotics-Club-NIT-Patna/roboticsclubnitpweb#readme',
        },
        {
            id: "11",
            title: 'HACKNITP 4.0',
            desc: "Official website of HackNITP 4.0. It is a 36-hour online hackaton and the biggest hackathon of Bihar Region.",
            img: '/images/hacknitp.png',
            link: 'https://hacknitp4-0-two.vercel.app/',
            tags: ['REACTJS', 'CSS'],
            github: 'https://github.com/pratik8696/hacknitp4.0',
            readme: 'https://github.com/pratik8696/hacknitp4.0#readme',
        },
        {
            id: "12",
            title: 'HACKARUTO',
            desc: "A website for the Hackaruto. It is an opensource hackclub.",
            img: '/images/hackaruto.png',
            link: 'https://hackaruto.netlify.app/',
            tags: ['REACTJS', 'SCSS'],
            github: 'https://github.com/SudhansuuRanjan/hackaruto',
            readme: 'https://github.com/SudhansuuRanjan/hackaruto#readme',
        }
    ]


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
                    {
                        projects.map((project) => (
                            <Projectcard key={project.id} {...project} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
