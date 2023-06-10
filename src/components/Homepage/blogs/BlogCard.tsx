import Image from "next/image"
import Link from "next/link"

type blogCardProps = {
    title: string,
    image: string,
    link: string,
    id: string
}

const BlogCard = ({ title, image, link, id }: blogCardProps) => {
    return (
        <Link target="_blank" href={link}>
            <div className="bg-[linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))] hover:border-gray-600 border p-5 border-gray-800 rounded-[2.3rem]">
                <div className="m-auto lg:w-[22rem] md:w-[20rem] w-auto">
                    <Image className="m-auto rounded-3xl" src={image} width={700} height={350} alt="KAIZEN" />
                    <div className="py-5 text-lg font-bold text-gray-200 px-5">
                        {title}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard