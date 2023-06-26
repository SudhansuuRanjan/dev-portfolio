import React from 'react'
import Heading from '@/components/Heading'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaJava, FaFigma, FaEthereum } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { TbBrandNextjs, TbBrandGraphql } from 'react-icons/tb'
import { SiExpress, SiTailwindcss, SiPostman, SiSolidity, SiFirebase } from 'react-icons/si'

const Skills = (): React.JSX.Element => {
    return (
        <div >
            <Heading heading='My Skills & Expertize' emoji="🛠️" desc='The main area of expertise is front end development (client side of the web).' />

            <div className='m-auto flex my-16 flex-wrap items-center justify-center gap-6 lg:max-w-[70%] md::max-w-[80%] max-w-[90%]'>
                <Skill icon={<AiFillHtml5 size={56} />} name="HTML" />
                <Skill icon={<IoLogoCss3 size={56} />} name="CSS" />
                <Skill icon={<IoLogoJavascript size={56} />} name="JavaScript" />
                <Skill icon={<FaReact size={56} />} name="ReactJs" />
                <Skill icon={<TbBrandNextjs size={56} />} name="NextJs" />
                <Skill icon={<SiSolidity size={56} />} name="Solidity" />
                <Skill icon={<FaEthereum size={56} />} name="Ethereum" />
                <Skill icon={<IoLogoNodejs size={56} />} name="NodeJs" />
                <Skill icon={<SiExpress size={56} />} name="Express" />
                <Skill icon={<SiFirebase size={56} />} name="Firebase" />
                <Skill icon={<SiTailwindcss size={56} />} name="TailwindCSS" />
                <Skill icon={<FaJava size={56} />} name="JAVA" />
                <Skill icon={<TbBrandGraphql size={56} />} name="GraphQl" />
                <Skill icon={<SiPostman size={56} />} name="Postman" />
                <Skill icon={<FaFigma size={56} />} name="Figma" />
                <Skill icon={<AiFillGithub size={56} />} name="Figma" />
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
            {icon}
            <div className='text-sm text-gray-400'>{name}</div>
        </div>
    )
}