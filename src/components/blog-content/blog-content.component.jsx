import React from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const BlogContent = ({ blogs }) => {
    const { id } = useParams();
    let blog = {};
    if (blog) {
        let blogArr = blogs.data.filter(blog => blog.id == id);
        blog = blogArr[0];
    } else {
        blog = {};
    }

    return (
        <div className="w-full pb-10 bg-[#f9f9f9]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 
                md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                    <div className="col-span-2">
                        <img className="h-56 w-full" src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} alt="Blog Image" />
                        <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
                        <div className="pt-5"><ReactMarkdown className="text-justify line-break">{blog.attributes.blogContent}</ReactMarkdown></div>
                    </div>

                    <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
                        <div>
                            <img className="p-2 h-32 w-32 rounded-full mx-auto object-cover" src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} alt="" />
                            <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{blog.attributes.authorName}</h1>
                            <p className="text-center text-gray-900 font-medium ">{blog.attributes.authorDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent;