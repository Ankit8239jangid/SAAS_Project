import React from 'react';

function Card({ name, cloudinaryImageId, locality, areaName, costForTwo, cuisines, avgRating, deliveryTime }) {
    return (
        <div className=' pt-2 w-full sm:w-[40vw] md:w-[30vw] xl:w-[20vw] h-auto mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'>
            <div className='max-w-full'>
                {/* Image container */}
                <div className='relative h-[30vh] md:h-[25vh] lg:h-[30vh] overflow-hidden rounded-t-2xl'>
                    <img
                        src= 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/11/839a5c22-e3b1-4e45-892a-bb9b0e0c0e37_6b340f26-d1dd-4d72-8627-e5824069c7d6.jpg'
                        alt={name}
                        className='w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out hover:scale-110'
                    />
                    {/* Rating badge */}
                    <div className='absolute top-2 left-2 bg-[#48c479] text-white px-3 py-1 text-xs font-bold rounded-full shadow-md'>
                        ⭐ {avgRating || 'N/A'}
                    </div>
                </div>
                {/* Content container */}
                <div className='p-5'>
                    {/* Restaurant name */}
                    <p className='font-bold text-gray-900 text-lg sm:text-lg md:text-md lg:text-lg mb-2 truncate'>
                        {name || 'Unknown Restaurant'}
                    </p>
                    {/* Locality and area */}
                    <p className='text-[#686b78] text-sm sm:text-sm md:text-sm font-semibold mb-2 truncate'>
                        {locality}, {areaName}
                    </p>
                    {/* Cuisines */}
                    {cuisines && cuisines.length > 0 && (
                        <p className='text-[#686b78] text-sm sm:text-sm md:text-xs mb-3 truncate'>
                            {cuisines.join(', ')}
                        </p>
                    )}
                    {/* Cost and delivery time */}
                    <div className='flex justify-between items-center mt-3'>
                        <p className='text-[#535665] text-sm font-semibold'>
                            {costForTwo || 'N/A'} 
                        </p>
                        <p className='text-[#535665] text-sm font-bold'>
                            ⏱ {deliveryTime || 'N/A'} mins
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
