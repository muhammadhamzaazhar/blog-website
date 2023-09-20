import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-8 text-black">

                    {
                        blogs.data.map(blog => (
                            <Link to={`/blog/${blog.id}`} className="group transition-transform hover:scale-105">
                                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                                    <img className="h-56 w-full" src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} alt="Blog Image" />
                                    <div className="p-8">
                                        <h3 className="font-bold text-xl my-1">{blog.attributes.blogTitle}</h3>
                                        <p className="text-gray-600 text-xl text-justify mt-2">{blog.attributes.blogDesc}</p>
                                        <div className="absolute bottom-0 left-0 w-full h-1 group-hover:bg-indigo-500"></div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Blogs;