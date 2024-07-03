import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  let navigate = useNavigate(); // hook from react router
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const[ searchQuery , setSearchQuery ]=useState(location?.search?.slice(3))
  // let query=location?.search?.slice(3);

  const searchResult = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: pageNo,
        },
      });
      setData((prevData) => {
        return [...prevData, ...response.data.results];
      });
      console.log(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let timerOut =  setTimeout(() => {        // to get only single response ,instead of getting response at every typing of letter in the search box
      if(searchQuery){ 
        setPageNo(1);
      setData([]);
      searchResult();
      }
    }, 600);
 
    return () =>clearTimeout(timerOut);
   
  }, [searchQuery,location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if(searchQuery){
      searchResult();
    }
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  



  return (
    <div className="py-20">
      <div className="search_field p-4 sticky top-20 z-[99] md:hidden  ">
        <input
          type="text"
          placeholder="search hers..."
          className="w-full border rounded-md bg-gray-800 p-3 px-5 text-lg"
          onChange={(e) => {
            navigate(`/search?q=${e.target.value}`)
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
        />
      </div>
      <div className="relative z-20">
        <h1 className="text-3xl text-center my-5 md:text-4xl">
          Search Result
        </h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {data.map((searchData, index) => {
            return (
              <Card
                singledata={searchData}
                key={searchData.id + "search" + index}
                media_Type={searchData.media_Type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
