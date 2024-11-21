import { Menu_Api } from '../utiliti/constent';
import { useState, useEffect } from 'react';

// const api = "/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId="
const UseRestorentMenu = (resId) => {
    const [menuinfo, setMenuInfo] = useState(null);
    // console.log("i am rendur ")
    useEffect(() => {
        const FtchMenu = async () => {
            try {
                let Api = await fetch( Menu_Api + resId);
                let json = await Api.json();
                setMenuInfo(json.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };      

        FtchMenu();
    }, [resId]);

    return menuinfo
}

export default UseRestorentMenu;