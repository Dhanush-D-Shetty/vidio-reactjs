import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Card = ({ singledata, istrending = false, index, media_Type }) => {
  const imageURL = useSelector(state => state.vidioData.imageURL);

  let mediaType = singledata.media_type ?? media_Type

  return (
    <Link to={ "/"+mediaType + "/" + singledata.id} className='relative w-full min-w-[220px] max-w-[220px] overflow-hidden   z-40 group mx-3 hover:scale-105 transition-all rounded-md' >
      <img src={imageURL + singledata?.poster_path} alt="" className='w-full' />
      <div className='absolute top-5'>
        {istrending && (
          <div className=' bg-black/60 py-1 px-4 overflow-hidden backdrop-blur-3xl rounded-r-lg'>#{index} Trending</div>
        )}
      </div>

      <h2 className='px-3 py-1  text-xl text-ellipsis line-clamp-1 overflow-hidden'>{singledata?.title || singledata?.name}</h2>
      <p className='px-3 pb-2 text-[#999] text-sm'>{moment(singledata.release_date).format("dddd, MMMM Do YYYY")}</p>
    </Link>
  )
}

export default Card