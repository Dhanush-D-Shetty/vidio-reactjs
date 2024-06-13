import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (endpoints) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(endpoints)
            setData(response.data.results)
            setIsLoading(false)
            // console.log("Now Playing = ", response.data.results);
        } catch (e) {
            console.log("error =  ", e);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data , isLoading}
}

export default useFetch