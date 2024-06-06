import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './codynn_Logo.png';
import Avatar from './Avatar.png';


const Header: React.FC = () => {
    return <>
        <header className="sticky z-50 top-[32px]">
            <nav className="bg-white  px-4 lg:px-2 py-1">
                <div className="flex flex-wrap justify-between items-center mx-16 max-w-screen-xl">
                    <Link to="/" className="flex items-center  mt-1 ">
                        <img
                            src={Logo}
                            className="h-[19px] w-[72px]"
                            alt="Logo"
                        />
                    </Link>
                    <div className='flex '>
                        <div className="flex items-center ml-14">
                            <div
                                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                id="mobile-menu-2"
                            >
                                <ul className="flex flex-col-reverse mt-4 mr-2  text-base font-sans lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <NavLink to="/"
                                            className="block py-2 pr-4 pl-3   border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-[#000000] font-semibold  lg:p-0">

                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#"
                                            className="block py-2 pr-4 pl-3   border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0">
                                            Compiler
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#"
                                            className="block py-2 pr-4 pl-3   border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0"
                                        >
                                            Versus Battle
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#"
                                            className="block py-2 pr-4 pl-3   border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0"
                                        >
                                            Questions
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#"
                                            className="block py-2 pr-4 pl-3 d  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0"
                                        >
                                            Challenges
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#"
                                            className="block py-2 pr-4 pl-3   border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0"
                                        >
                                            About
                                        </NavLink>
                                    </li>



                                </ul>


                            </div>


                        </div>
                        <div
                            className="ml-20"
                        >
                            <img
                                src={Avatar}
                                className="h-[46px] w-[46px]"
                                alt=""
                            />
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    </>
}

export default Header;
