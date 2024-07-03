import React, { useEffect, useState } from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomeBanner = () => {

    const [currentBanner, setCurrentBanner] = useState(0);
    // const [playVedio, setPlayVedio] = useState(false);
    // const [playVideoData, setPlayVideoData] = useState();
    const bannerData = useSelector(state => state.vidioData.bannerData);
    const imageURL = useSelector(state => state.vidioData.imageURL);

    const handlePrev = () => {
        currentBanner && setCurrentBanner((prev) => prev - 1);
    }
    const handleNext = () => {
        currentBanner < bannerData.length - 1 ? setCurrentBanner((prev) => prev + 1) : setCurrentBanner(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            currentBanner < bannerData.length - 1 ? handleNext() : setCurrentBanner(0);
        }, 3000)
        return () => clearInterval(interval)
    }, [imageURL, imageURL, currentBanner])


    const notify = () => toast.info("oops sorry i am of no use !");
    // let handlePlayTrailer =(data)=>{
    //     useEffect(()=>{
    //         const { data: videoDataInfo } = useFetchDetails(`/${data?.media_type}/${data?.id}/videos`);
    //         setPlayVideoData(videoDataInfo);
    //         console.log(videoDataInfo)
    //     },[data])
    //     setPlayVedio(true);
    //     // console.log("videoDataInfo ",videoDataInfo);
    //     // console.log(playVideoData);
    // }

    return (
        <section className='w-full h-full'>
            <div className='w-full  h-full flex overflow-hidden'>
                {bannerData ? bannerData.map((data, index) => {
                    return (
                        <div key={data.id} style={{ transform: `translateX(-${currentBanner * 100}%)` }} className='container h-[70vh] relative min-w-full overflow-hidden lg:h-full  group'>

                            <div className='movie-poster min-h-[90vh] h-[95vh] w-full md:h-[100vh] '>
                                <img src={imageURL + data.backdrop_path} alt={data.title} className='object-cover  w-full h-full' />
                            </div>

                            {/* next and prev button */}
                            {/* if i hover i will get this button else not visible  { group-hover:flex}*/}
                            <div className='absolute top-0 w-full h-full  hidden items-center justify-between px-4 group-hover:lg:flex'>
                                <button onClick={handlePrev} className='bg-gray-800 rounded-full z-50 hover:scale-75 hover:bg-slate-300 transition-all '><GrFormPrevious size={40} color='#999' /></button>
                                <button onClick={handleNext} className='bg-gray-800 rounded-full z-50 hover:scale-75  hover:bg-slate-300 transition-all'><GrFormNext size={40} color='#999' /></button>
                            </div>

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>

                            <div className='movie-info absolute  left-0 bottom-0 px-5 lg:mb-20 lg:w-1/2 lg:px-16'>
                                <h1 className='text-4xl my-3 font-bold lg:text-6xl'>{data.original_name || data.original_title}</h1>
                                <div className='text-lg my-3 flex gap-5 lg:my-6 '>
                                    <span className='capitalize'>{data.media_type}</span>
                                    <span className='md:pl-5'>1-season</span>
                                    <span className='px-5 py-1 rounded-lg bg-gray-600 '>{Number(data.vote_average).toFixed(1)}</span>
                                </div>
                                <p className='text-xl my-3 text-white text-ellipsis line-clamp-3 lg:text-2xl '>{data.overview}</p>
                                {/* <div className='text-xl  my-6 flex gap-5'>
                                    <span >{data.release_date}</span>
                                    <span className='border-l-2 border-l-gray-500 pl-5 '>gener</span>
                                    <span className='border-l-2 border-l-gray-500 pl-5'>gener</span>
                                    <span className='border-l-2 border-l-gray-500 pl-5'>gener</span> 
                                </div> */}
                                {/* <div className='text-xl  my-6 flex gap-5'>
                                    <span>hnd</span>
                                    <span>englsh</span>
                                </div> */}
                                <button onClick={notify} className='text-xl my-5 bg-white text-black font-bold py-3 rounded-xl flex justify-center items-center gap-2 w-full  hover:scale-95 transition-all lg:w-[75%] lg:text-3xl'><FaGooglePlay />watch trailer</button>

                                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition:Bounce />


                            </div>
                        </div>
                    )
                }) : <div className='w-full min-h-[80vh] text-neutral-500 flex justify-center items-center text-2xl'>No Data to show</div>}

            </div>
            {/* {playVedio && ( <VideoPlayer playVideoData={playVideoData} close={() => setPlayVedio(false)} />)} */}
        </section>
    )
}

export default HomeBanner