
import { Link } from 'react-router-dom';
import symbolLogo from './symbolLogo.png';
import arrow from './Arrow.png';
import downArrow from './Downarrow.png';
import Codynn from './Codynn.png';

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="bg-[#272727] border-y font-sans text-base">
            <div className="mx-auto w-full max-w-full p-4 py-5 lg:py-8">
                <div className="md:flex md:justify-between border-[1px] border-r-0 border-l-0 border-t-0  border-[#ffffff] ">
                    <div className=" flex items-center justify-center ml-8  mb-6 md:mb-0 ">
                        <div className=" p-2">
                            <img
                                src={symbolLogo}
                                className="ml-4 h-16 w-16"
                                alt="Logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-evenly items-center border-[1px] py-4 border-white border-b-0 w-full pr-32 pl-64 ml-24 border-r-0 border-t-0 font-base">

                        <div>
                            <ul className="text-[#FFFFFF] ">
                                <li className="mb-4">
                                    <Link to="/" className="font-semibold">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <div className="font-normal">
                                        Compiler
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <ul className="text-[#FFFFFF] font-normal ">
                                <li className="mb-4">
                                    <div
                                    >
                                        Versus Battles
                                    </div>
                                </li>
                                <li>
                                    <div className="">
                                        Questions
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <ul className="text-[#FFFFFF] font-normal ">
                                <li className="mb-4">
                                    <div className="">
                                        Challenges
                                    </div>
                                </li>
                                <li>
                                    <div className="">
                                        About
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='relative mb-32 mr-10 '>
                                <div className='absolute mt-2 w-28 h-28 bg-gray-300 z-10 rounded-full '></div>
                                <div className='absolute mt-0 ml-3 w-28 h-28  rounded-full  border-black border-[1px]  bg-[#ffffff] z-20'>
                                    <div className='mt-8'>
                                        <div className='flex items-center justify-center'>Contact</div>
                                        <div className='flex items-center justify-center'>Us
                                            <img
                                                src={arrow}
                                                className="ml-1 mb-1 h-[16.67px] w-[16.67px]"
                                                alt="Logo"
                                            /></div></div>
                                </div>
                            </div>
                        </div>
                        <div className='ml-[60px]'>
                            <div className='relative mb-32 '>
                                <div className='absolute mt-2 w-28 h-28 bg-gray-300 z-10 rounded-full '></div>
                                <div className='absolute mt-0 ml-3 w-28 h-28  rounded-full  border-black border-[1px]  bg-[#FFE457] z-20'>
                                    <div className='mt-8'>
                                        <div className='flex items-center justify-center'>Reviews</div>
                                        <div className='flex items-center justify-center'>
                                            <img
                                                src={downArrow}
                                                className="ml-1 mb-1 h-[16.67px] w-[16.67px]"
                                                alt="Logo"
                                            /></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center m-24'>
                <img
                                                src={Codynn}
                                                className=" mb-1 h-[171px] w-[899px]"
                                                alt="Logo"
                                            />
                </div>
                <div className=' flex ml-[815px] items-center  '>
                    <div className='absolute mt-16 bg-[#272727] text-[#ffffff] p-2'>
                   <span className='text-gray-500'> Version:</span> 00.01
                    </div>
                </div>
                <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

                <div className=' flex ml-[240px] items-center  '>
                    <div className='absolute mt-16 bg-[#272727] text-[#ffffff] p-2'>
                   <span className='text-gray-500'> A product of VOID NEPAL</span> ©Codynn 2024
                    </div>
                </div>
                <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

            </div>
        </footer>
    )
}