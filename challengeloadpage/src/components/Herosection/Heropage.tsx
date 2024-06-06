import React from 'react';
import heroImage from './HeroImage.png';
import notFound from './404.png';

const Heropage: React.FC = () => {
    return <>

        <div className='mb-[132.83px]'>
            <div className='absolute ml-64 mt-8'>
                <img
                    src={notFound}
                    className=" h-28 w-28"
                    alt=""
                />

            </div>
            <div className='flex justify-center mt-28'>
                <img
                    src={heroImage}
                    className=" mb-1 h-[362px] w-[737.47px]"
                    alt=""
                />
            </div>
        
        <div className='mt-7 font-sans'>
            <div className='flex justify-center text-4xl  items-center gap-1 mb-1.5 '><span className='font-bold mr-2'>Oops,</span>  Challenges did’t load.</div>
            <div className='flex justify-center items-center text-gray-500'>Try Reloading.</div>
            <div className='flex justify-center items-center mt-5'>
                <button className='bg-[#000000] w-36 h-12 rounded-full text-[#EDEDED]'>Reload</button>
            </div>

        </div>
        </div>
    </>
}

export default Heropage;