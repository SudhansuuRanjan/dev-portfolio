import React from 'react'
import Heading from '@/components/Heading'
import Projectcard from './Projectcard'
import Link from 'next/link'

const Project = (): React.JSX.Element => {

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
      tags: ['REACT', 'NODE/EXPRESS', 'TAILWIND','SPOTIFY API'],
      github: 'https://github.com/SudhansuuRanjan/SpotiStat',
      readme: 'https://github.com/SudhansuuRanjan/SpotiStat#readme',
    },
    {
      id: "04",
      title: 'CAMPUS CRATE',
      desc: 'A (DAO) expertly designed to cultivate and expedite the ecosystem projects and ideas in the campuses.',
      img: '/images/campuscrate.png',
      link: 'https://campus-crate-kohl.vercel.app/',
      tags: ['REACT', 'TAILWIND',"THIRDWEB", "NODE/EXPRESS", "IPFS","METAMASK"],
      github: 'https://github.com/Harshkumar62367/CampusCrate',
      readme: 'https://github.com/Harshkumar62367/CampusCrate#readme',
    },
  ]


  return (
    <div >
      <Heading heading='Yeah, I work hard' emoji="💼" desc='Each project is unique. Here are some of my works.' />

      <div className='flex my-16 flex-col items-center justify-center gap-16'>
        {
          projects.map((project) => (
            <Projectcard key={project.id} {...project} />
          ))
        }
      </div>

      <div className='flex items-center justify-center'>
        <Link  href="/projects">
          <button className='custom-button m-auto'>
            View All
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Project