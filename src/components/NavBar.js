import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-600 text-4xl tracking-widest"
                    >
                        <img
                            src={"./yang.png"}
                            className="inline-flex items-center rounded w-12 h-12 lg:w-28 lg:h-28 mr-4"
                            alt="Yang"
                        />
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-blue-600"
                        activeClassName="text-red-100 bg-black-800"
                    >
                        Research
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-blue-600"
                        activeClassName="text-red-100 bg-black-800"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-blue-600"
                        activeClassName="text-red-100 bg-black-800"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://github.com/QikaiYang"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="mailto:qikaiy2@illinois.edu"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/qikai-yang-89411b179/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    );
}