import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className='max-w-6xl mx-auto my-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>The Blogs</h2>
                <p className='text-base font-normal mt-3'>You can read blog from here. and know more about us and know about reading book. read blog and enjoy.</p>
            </div>
            <div className="divider"></div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 mx-2'>
                {
                    blogs.map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;