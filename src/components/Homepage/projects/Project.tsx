import React from 'react'
import Heading from '@/components/Heading'
import Projectcard from './Projectcard'
import Link from 'next/link'

const Project = (): React.JSX.Element => {

  const projects = [
    {
      id: "01",
      title: 'RETINA 7.0',
      desc: 'Official event and admin portal for RETINA 7.0, the annual cultural fest of AIIMS Bhopal.',
      img: '/images/retina-aiims.jpg',
      link: 'https://retinaaiims.org/',
      tags: ['ReactJs', 'NodeJs', 'Express', 'Postgres', 'SabPaisa'],
      github: 'https://github.com/SudhansuuRanjan/retina2024',
      readme: 'https://github.com/SudhansuuRanjan/retina2024#readme',
    },
    {
      id: "02",
      title: 'ClipSync',
      desc: 'A web app for syncing clipboard across devices.',
      img: '/images/clipsync.jpg',
      link: 'https://clipsync.pages.dev/',
      tags: ['ReactJs', 'Postgres', 'Supabase Realtime'],
      github: 'https://github.com/SudhansuuRanjan/clipsync',
      readme: 'https://github.com/SudhansuuRanjan/clipsync#readme',
    },
    {
      id: "03",
      title: 'KAIZEN 2024',
      desc: 'Official event and admin portal for KAIZEN 2024, the annual cultural fest of AIIMS Patna.',
      img: '/images/Kaizen-banner.jpg',
      link: 'https://kaizenaiims.com/',
      tags: ['ReactJs', 'NodeJs', 'Express', 'Postgres', 'SabPaisa'],
      github: 'https://github.com/SudhansuuRanjan/kaizen2024',
      readme: 'https://github.com/SudhansuuRanjan/kaizen2024#readme',
    },
    {
      id: "04",
      title: 'NIT Patna, Alumni Portal',
      desc: 'Official Alumni Portal for NIT Patna, One-stop portal for alumni of the NIT Patna.',
      img: '/images/alumni-nitp.jpg',
      link: 'https://alumini-nitp.vercel.app/',
      tags: ['ReactJs', 'NodeJs', 'Express', 'Appwrite', 'TailwindCSS'],
      github: 'https://github.com/Rishabh-25-code/alumini-cell-nitp',
      readme: 'https://github.com/Rishabh-25-code/alumini-cell-nitp#readme',
    },
    {
      id: "05",
      title: 'MixMe',
      desc: 'A spotify client for users to view their Spotify listening history and statistics.',
      img: '/images/spotistat.png',
      link: 'https://mixme.vercel.app/',
      tags: ['React', 'Node/Express', 'TailwindCSS', 'Spotify API'],
      github: 'https://github.com/SudhansuuRanjan/mix.me',
      readme: 'https://wiki.mutable.ai/SudhansuuRanjan/mix.me',
    },
    {
      id: "06",
      title: 'Tesla NITP',
      desc: 'Official website of Tesla Club NIT Patna, A club for Electrical Engg. students.',
      img: '/images/tesla.jpg',
      link: 'https://tesla-nitp.vercel.app/',
      tags: ['ReactJs', 'NodeJs', 'Express', 'Appwrite', 'TailwindCSS'],
      github: 'https://github.com/SudhansuuRanjan/tesla-nitp-web',
      readme: 'https://github.com/SudhansuuRanjan/tesla-nitp-web#readme',
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
        <Link href="/projects">
          <button className='custom-button m-auto'>
            View All
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Project
