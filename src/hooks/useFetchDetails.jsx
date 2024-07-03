import axios from 'axios';
import React, { useEffect, useState } from 'react'


// hook for fetchng detals based on id of tv or movie
const useFetchDetails = (endpoints) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(endpoints)
            setData(response?.data)
            setIsLoading(false)
            // console.log("Now Playing = ", response.data);
        } catch (e) {
            console.log("error =  ", e);
        }
    }

    useEffect(() => {
        fetchData();
    },[endpoints])

    return { data, isLoading }
}

export default useFetchDetails;
