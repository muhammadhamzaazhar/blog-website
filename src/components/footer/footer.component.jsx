import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-[#191b5a] text-white py-8 px-2">

            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pb-4">About Us</h6>
                    <p className="text-lg">We are a passionate team of bloggers who love sharing insights and knowledge on various topics. Explore our blog to stay updated.</p>
                </div>

                <div className="mr-5">
                    <h6 className="font-bold uppercase pb-4">Popular Categories</h6>
                    <ul>
                        <li className="py-1"><a href="#">Technology</a></li>
                        <li className="py-1"><a href="#">Travel</a></li>
                        <li className="py-1"><a href="#">Health & Wellness</a></li>
                        <li className="py-1"><a href="#">Food & Cooking</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pb-4">Newsletter</h6>
                    <p className="text-lg">Subscribe to our newsletter and never miss an update. Enter your email to stay connected.</p>
                    <form className="flex flex-col sm:flex-row mt-4">
                        <input className="w-full p-2 mr-4 rounded-md mb-4 border-b-2" type="email" placeholder="Enter email" />
                        <button className="mb-4 px-4 py-2 hover:bg-white">Subscribe</button>
                    </form>
                </div>

                <div>
                    <h6 className="font-bold uppercase pb-4">Follow Us</h6>
                    <div className="flex gap-4">
                        <FaFacebook className="text-2xl hover:text-indigo-500 cursor-pointer" />
                        <FaGithub className="text-2xl hover:text-indigo-500 cursor-pointer" />
                        <FaInstagram className="text-2xl hover:text-indigo-500 cursor-pointer" />
                        <FaTwitch className="text-2xl hover:text-indigo-500 cursor-pointer" />
                        <FaTwitter className="text-2xl hover:text-indigo-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto text-center py-4">
                <p className="text-lg mt-2">&copy; {new Date().getFullYear()} Muhammad Hamza Azhar. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer;
