import React, { useEffect } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import useFetchDetails from '../hooks/useFetchDetails';
// import YouTube,{ YouTubeProps } from 'react-youtube';

const VideoPlayer = ({ playVideoData , close }) => {


    //  console.log("play vedeo data " ,playVideoData)
        //  const { data: videoDataInfo } = useFetchDetails(`/${media_type}/${playVideoData?.id}/videos`);
        // console.log(" video info ", videoDataInfo)

        // console.log(" videoDataInfo  results[0]  key  ", playVideoData?.results)
    
     
    
return (
    <section className='fixed top-0 left-0 bottom-0 right-0 bg-neutral-700 z-40 bg-opacity-50  flex justify-center items-center'>
        <div className='relative bg-black w-[95vw]  max-w-screen-lg rounded  aspect-video'>
            <button onClick={close} className='absolute -top-8 -right-8 z-50'>
                <IoMdCloseCircle size={60} />
            </button>

            {/* <YouTube videoId={videoDataInfo?.results[0]?.key} />; */}
            {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoDataInfo?.results[0]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full h-full'></iframe> */}
            <iframe src={`https://www.youtube.com/embed/${playVideoData?.results[0]?.key}`} className='w-full h-full'></iframe>
        </div>
    </section>
)
}

export default VideoPlayer