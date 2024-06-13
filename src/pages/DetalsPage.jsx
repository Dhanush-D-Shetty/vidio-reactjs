import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetalsPage = () => {

 const param = useParams();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(0);

  // console.log("params =  ", param.explore);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`/search/movie`, {
  //       params: {
  //         query: ,
  //         language:en-US,
  //         include_adult:true,
  //         page: pageNo,
  //       },
  //     });
  //     setData((prevData) => {
  //       return [...prevData, ...response.data.results];
  //     });
  //     // console.log(response.data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };


  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1)
    setData([]);
    fetchData();
  }, [param.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div>
     <div className="pt-20">
      <div className="">
        <h1 className="text-3xl text-center my-5 md:text-4xl">Popular { param.explore==="tv" ?"TV Show":"Movies"}</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {/* {data.map((singleData, index) => {
            return <Card singledata={singleData}  key={singleData.id} media_Type={param.explore}/>;
          })} */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetalsPage ;
