import React from 'react'
import Heading from '@/components/Heading'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaJava, FaFigma, FaEthereum } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { TbBrandNextjs, TbBrandGraphql } from 'react-icons/tb'
import { SiExpress, SiTailwindcss, SiPostman, SiSolidity, SiFirebase } from 'react-icons/si'
import { SiMongodb, SiPostgresql, SiOracle } from "react-icons/si";

const Skills = (): React.JSX.Element => {
    return (
        <div >
            <Heading heading='My Skills & Expertize' emoji="🛠️" desc='The main area of expertise is front end development (client side of the web).' />

            <div className='m-auto flex my-16 flex-wrap items-center justify-center lg:gap-6 gap-5 lg:max-w-[70%] md::max-w-[80%] max-w-[90%]'>
                <Skill icon={<AiFillHtml5 />} name="HTML" />
                <Skill icon={<IoLogoCss3 />} name="CSS" />
                <Skill icon={<IoLogoJavascript />} name="JavaScript" />
                <Skill icon={<FaReact />} name="ReactJs" />
                <Skill icon={<TbBrandNextjs />} name="NextJs" />
                <Skill icon={<SiSolidity />} name="Solidity" />
                <Skill icon={<FaEthereum />} name="Ethereum" />
                <Skill icon={<IoLogoNodejs />} name="NodeJs" />
                <Skill icon={<SiExpress />} name="Express" />
                <Skill icon={<SiFirebase />} name="Firebase" />
                <Skill icon={<SiTailwindcss />} name="TailwindCSS" />
                <Skill icon={<FaJava />} name="JAVA" />
                <Skill icon={<TbBrandGraphql />} name="GraphQl" />
                <Skill icon={<SiPostman />} name="Postman" />
                <Skill icon={<FaFigma />} name="Figma" />
                <Skill icon={<AiFillGithub />} name="GitHub" />
                <Skill icon={<SiMongodb />} name="MongoDB" />
                <Skill icon={<SiPostgresql />} name="PostgreSQL" />
                <Skill icon={<SiOracle />} name="OCI" />
            </div>
        </div>
    )
}

export default Skills


type TpSkill = {
    icon: React.JSX.Element,
    name: string,
}
const Skill = ({ icon, name }: TpSkill): React.JSX.Element => {
    return (
        <div className='text-lg text-gray-300 flex flex-col items-center text-center'>
            <div className='lg:text-5xl md:text-4xl text-3xl'>{icon}</div>
            <div className='text-sm text-gray-400 mt-1'>{name}</div>
        </div>
    )
}