import Link from 'next/link'
import Heading from '../Heading'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className='w-full'>
            <Heading heading='Connect with me' emoji="👋" desc='Don&apos;t be a stranger.' />
            <div className='flex flex-col gap-3 text-lg text-gray-400'>
                <SocialLink icon={<GrMail size={24}/>} text="MAIL" link="mailto:sudhanshuranjan2k18@gmail.com" />
                <SocialLink icon={<FaGithub size={24} />} text="GITHUB" link="https://github.com/SudhansuuRanjan" />
                <SocialLink icon={<FaLinkedin size={24} />} text="LINKEDIN" link="https://www.linkedin.com/in/sudhanshu-ranjan-a1779b202/" />
                <SocialLink icon={<FaTwitter size={24}/>} text="TWITTER" link="https://twitter.com/Sudhanss_u" />
                <SocialLink icon={<FaInstagram size={24}/>} text="INSTAGRAM" link="https://instagram.com/sudhanss_uu" />
            </div>
        </div>
    )
}

type LinkProp = {
    link: string,
    text: string,
    icon: React.JSX.Element
}

const SocialLink = ({ link, text, icon }: LinkProp) => {
    return (
        <Link target='_blank' href={link}>
            <div className='flex gap-3 items-center w-fit'>
                <div>
                    {icon}
                </div>
                <div className='border-b tracking-wider transition-all ease-in-out delay-[30ms] hover:text-gray-500 border-pink-600 w-[40%] hover:w-full'>
                    {text}
                </div>
            </div>
        </Link>
    )
}

export default Contact