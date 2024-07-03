import React, { useRef } from 'react'
import Card from './Card'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const HorizontalScrollbar = ({ data = [], istrending, heading, media_Type}) => {

    
    const containerRef = useRef();

    const handlePrev = () => {
        containerRef.current.scrollLeft -= 50
    }
    const handleNext = () => {
        containerRef.current.scrollLeft += 50
    }


    return (
        <div className={`container relative z-20 mx-auto px-3 my-3 py-3 border-t-[1px]  pb-8 border-t-neutral-800`}>
            <h1 className='text-2xl lg:text-3xl font-bold my-4 capitalize'>{heading }</h1>
            <div className='relative overflow-hidden  min-h-[280px]'>

                <div ref={containerRef} className='flex gap-1 overflow-x-auto scroll-smooth transition-all  scrollbar-none'>
                    {data.map((singledata, index) => {
                        return (
                            <Card key={singledata.id + heading + index} singledata={singledata} istrending={istrending} index={index + 1}  media_Type={media_Type} />
                        )
                    })}
                </div>

                {/* next and prev button */}
                <div className='absolute top-0 w-full h-full  hidden items-center justify-between  lg:flex '>
                    <button onClick={handlePrev} className='bg-gray-800 rounded-full z-50 hover:scale-75 hover:bg-slate-300 transition-all '><GrFormPrevious size={40} color='#999' /></button>
                    <button onClick={handleNext} className='bg-gray-800 rounded-full z-50 hover:scale-75  hover:bg-slate-300 transition-all'><GrFormNext size={40} color='#999' /></button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScrollbar
