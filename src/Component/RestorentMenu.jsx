
import { useParams } from "react-router-dom";
import Shemerui from './shemerui';
import UseRestorentMenu from '../utiliti/useRestorentMenu';

function RestorentMenu() {
    const { resId } = useParams();
    
    const menuinfo = UseRestorentMenu(resId);
   

    if (menuinfo === null) return <Shemerui />;

    // Safely extract the title and itemCards
    const name1 = menuinfo.cards?.[2]?.card?.card?.info?.name || "Restaurant";
    const city = menuinfo.cards?.[2]?.card?.card?.info?.slugs?.city || "Unknown City";
    const restaurant = menuinfo.cards?.[2]?.card?.card?.info?.slugs?.restaurant || "Unknown Restaurant";
    const itemCards = menuinfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    return (
        <>
            <h1 className='font-bold py-2 ml-10'>{name1} Menu</h1>
            <p className='font-semibold uppercase ml-10'>{city}</p>
            <p className='font-semibold ml-10'>{restaurant}</p>
            <ul>
                {itemCards.map((menu, id) => {
                    const name = menu?.card?.info?.name || "Item";
                    const Dprice = menu?.card?.info?.price; // Direct price from info
                    const priceFromVariants = menu?.card?.info?.variantsV2?.pricingModels?.[0]?.price; // Price from variantsV2

                    // Handle both price sources and make sure it's a number before dividing by 100
                    const price = priceFromVariants ? priceFromVariants / 100 : Dprice ? Dprice / 100 : "Price not available";

                    return (
                        <li key={id} className='py-2 ml-10'>
                            {name} = {price} INR
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default RestorentMenu;
 