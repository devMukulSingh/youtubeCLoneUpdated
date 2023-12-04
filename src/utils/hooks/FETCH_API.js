import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../api.js"

const FETCH_API = ( URL,API_KEY=process.env.REACT_APP_API_KEY3 ) => {

    const[loading,setLoading] = useState(null);
    const [data, setData] = useState(null);
    const[error, setError] = useState(null);

    useEffect( () => {
        fetchData();
    },[URL]);

    const fetchData = async() => {
        try {
                setLoading(true);
                const res = await fetchDataFromApi(URL,API_KEY);
                setData(res);
                setLoading(false);

        } catch (error) {
            setError(`Error in useFetch ${error}`);
            }
    }

    return { loading, data, error };
}

export default FETCH_API;