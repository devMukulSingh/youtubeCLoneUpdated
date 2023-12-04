import React, {createContext, useState, useEffect} from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {

    const [ homeScreenVideos, setHomeScreenVideos ] = useState(null);
    const[ sidebarQuery, setSidebarQuery ] = useState('now');
    const[ categoryQuery, setCategoryQuery ] = useState(null);


/////////////////////JSX PART STARTS///////////////////////////////////
    return(
        <Context.Provider value={{
            homeScreenVideos,
            setHomeScreenVideos,
            sidebarQuery,
            setSidebarQuery,
            categoryQuery,
            setCategoryQuery
        }}>
            {props.children}
        </Context.Provider>
    )

}