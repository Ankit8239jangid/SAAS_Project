import React from 'react'

export default function Shemerui() {
    return (



        < div className='flex flex-wrap gap-7 w-full h-auto bg-black py-4' >

{Array(6).fill().map((_,index)=>{
<div key={index} className='w-full sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] h-auto mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-pulse'>
                <div className='max-w-full mx-auto'>
                    <div className='h-[30vh] md:h-[25vh] lg:h-[30vh] bg-gray-300'></div>
                    <div className='p-4 sm:p-5 md:p-6 lg:p-4 xl:p-3'>
                        <div className='h-5 bg-gray-300 rounded w-3/4 mb-3'></div>
                        <div className='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
                        <div className='h-4 bg-gray-300 rounded w-full mb-4'></div>
                        <div className='flex gap-10'>
                            <div className='h-4 bg-gray-300 rounded w-12'></div>
                            <div className='h-4 bg-gray-300 rounded w-12'></div>
                            <div className='h-4 bg-gray-300 rounded w-12'></div>
                        </div>
                    </div>
                </div>
            </div>
})}
            
            
           
        </div>

    );
}
