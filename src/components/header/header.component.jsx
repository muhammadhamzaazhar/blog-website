import React, { useState } from "react";

import Logo from "../../assets/logo.jpg";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handelClick = () => setToggle(!toggle);

    return (
        <div className="w-full h-[80px] z-10 bg-[#f8f9fa] drop-shadow-lg relative">
            <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">

                <div className="flex items-center">
                    <img src={Logo} alt="logo" className="rounded-full sm:ml-10 ss:ml-10 md:ml-3 w-full h-[50px]" />
                    <p className="text-[40px] ml-1 mb-3">𝕳𝖆𝖒𝖟𝖆</p>
                </div>

                <div className="flex items-center">
                    <ul className="hidden md:flex">
                        <li className="mx-4 cursor-pointer border-b-2 border-transparent hover:border-indigo-500">Home</li>
                        <li className="mx-4 cursor-pointer border-b-2 border-transparent hover:border-indigo-500">About</li>
                        <li className="mx-4 cursor-pointer border-b-2 border-transparent hover:border-indigo-500">Support</li>
                        <li className="mx-4 cursor-pointer border-b-2 border-transparent hover:border-indigo-500">Platform</li>
                        <li className="mx-4 cursor-pointer border-b-2 border-transparent hover:border-indigo-500">Pricing</li>
                    </ul>
                </div>

                <div className="hidden md:flex sm:mr-10 md:mr-10">
                    <button className="bg-transparent border-b-4 text-black mr-2 px-7 py-3">Login</button>
                    <button className="mx-0 px-7 py-3 border-b-4">Sign Up</button>
                </div>

                <div className="md:hidden cursor-pointer" onClick={handelClick}>
                    <img src={!toggle ? Menu : Close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
                </div>

            </div>

            <ul className={toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"}>
                <li className="border-none py-2 hover:text-indigo-500 cursor-pointer">Home</li>
                <li className="border-none py-2 hover:text-indigo-500 cursor-pointer">About</li>
                <li className="border-none py-2 hover:text-indigo-500 cursor-pointer">Support</li>
                <li className="border-none py-2 hover:text-indigo-500 cursor-pointer">Platform</li>
                <li className="border-none py-2 hover:text-indigo-500 cursor-pointer">Pricing</li>

                <div className="flex flex-col my-4">
                    <button className="bg-transparent border-b-4 text-black mb-4 px-7 py-3">Login</button>
                    <button className="mx-0 px-7 py-3 border-b-4">Sign Up</button>
                </div>
            </ul>

        </div>
    )
}

export default Header;