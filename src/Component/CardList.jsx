import { useState, useEffect } from "react";
import Shemerui from "./shemerui";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function CardList() {
    const [filterdlist, setFilterdlist] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]); // Keep the full list
     
    const [searchtext, setSearchtext] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Perform the search filtering whenever searchtext changes
        const searchFilter = allRestaurants.filter((restaurant) =>
            restaurant.name?.toLowerCase().includes(searchtext.toLowerCase())
        );
        setFilterdlist(searchFilter);
    }, [searchtext, allRestaurants]);

    const fetchData = async () => {
        try {
            const api = await fetch("/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await api.json();

            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            // Check if restaurants have proper info before mapping
            const mappedData = restaurants.map(restaurant => ({
                id: restaurant.info?.id || "N/A",
                name: restaurant.info?.name || "N/A",
                cloudinaryImageId: restaurant.info?.cloudinaryImageId ? 
                    `RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_446553.JPG` 
                    : "default-image-url",
                locality: restaurant.info?.locality || "N/A",
                areaName: restaurant.info?.areaName || "N/A",
                costForTwo: restaurant.info?.costForTwo || "N/A",
                cuisines: restaurant.info?.cuisines || ["N/A"],
                avgRating: restaurant.info?.avgRating || "N/A",
                deliveryTime: restaurant.info?.sla?.deliveryTime || "N/A",
            }));

            setAllRestaurants(mappedData); // Save full data list
            setFilterdlist(mappedData); // Initialize with full data list

        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    // Return loading state if there is no data or the filtered list is empty
    if (!filterdlist || filterdlist.length === 0) {
        return <Shemerui />;
    }

    return (
        <>
            <div className='bg-zinc-900   py-8   h-9 flex items-center justify-center gap-20'>
                <div>
                    <input
                        type="text"
                        placeholder='Search'
                        value={searchtext}
                        onChange={(e) => setSearchtext(e.target.value)}
                        className='bg-white p-2 rounded'
                    />
                    <button
                        onClick={() => {
                            const ratingFilter = allRestaurants.filter((card) => card.avgRating > 4);
                            setFilterdlist(ratingFilter);
                        }}
                        className='bg-green-700 px-4 mt-3 rounded text-white font-semibold ml-2'>
                        Filter
                    </button>
                </div>

              
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center h-auto bg-zinc-300 py-5'>
                {filterdlist.map((restaurant) => (
                    <Link key={restaurant.id} to={`/restorent-menu/${restaurant.id}`}>
                        <Card
                            name={restaurant.name}
                            cloudinaryImageId={restaurant.cloudinaryImageId}
                            locality={restaurant.locality}
                            areaName={restaurant.areaName}
                            costForTwo={restaurant.costForTwo}
                            cuisines={restaurant.cuisines}
                            avgRating={restaurant.avgRating}
                            deliveryTime={restaurant.deliveryTime}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
