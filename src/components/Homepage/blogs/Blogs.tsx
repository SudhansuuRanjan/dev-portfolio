import React from 'react'
import Heading from '@/components/Heading'
import BlogCard from './BlogCard'
import Link from 'next/link'

const Blogs = () => {

    const blogs = [
        {
            title: 'How to build Shopping Cart using HTML, CSS and Js.',
            image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1662211619297/WHIzah9m5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            link: 'https://sudhanshuranjanblogs.hashnode.dev/making-a-shopping-cart',
            id: '1'
        },
        {
            title: "JavaScript Interview Question (Directory Mapping 📂)",
            image: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/4iN-LAzqAdE/upload/8491114c3ac15ca04606ee141e1fd598.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            link: "https://sudhanshuranjanblogs.hashnode.dev/js-interview-ques-directory-mapping",
            id: "2",
        },
        {
            title: "Oracle Interview Experience (On-Campus)",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1691046429941/a65b7643-50d5-4433-a3a7-890b854ce137.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            link: "https://sudhanshuranjanblogs.hashnode.dev/oracle-interview-experience-on-campus",
            id: "3",
        }
    ]


    return (
        <div className='w-full'>
            <Heading heading='Latest Blogs' emoji="📝" desc='I also write technical blogs.' />
            <div className='flex my-16 flex-wrap items-center justify-evenly gap-6 gap-y-16'>
                {
                    blogs.map((blog, idx) => (
                        <BlogCard title={blog.title} id={blog.id} key={blog.id} image={blog.image} link={blog.link} />
                    ))
                }
            </div>
            <div className='flex items-center justify-center'>
                <Link href="/blogs">
                    <button className='custom-button m-auto'>
                        View All
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Blogs