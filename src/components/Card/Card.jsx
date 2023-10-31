import React, { useEffect, useState } from 'react'
import "./card.css"
const Card = ({ news }) => {

    const [time, settime] = useState("")
    const date = new Date(news.attributes.createdAt)
    useEffect(() => {
        settime(date.toDateString())
    }, [])


    return (
        <div className='card w-4/5 bg-black my-2 p-2 rounded-md relative'>
            <div className=" main w-full h-56 flex justify-between items-center">
                <div className="img w-56 h-full ">
                    <img className='w-full h-full' src={news.attributes.newsIcon} alt="" />
                </div>
                <div style={{ width: "calc(100% - 224px)" }} className="t1 flex h-full flex-col  items-start px-2">
                    <h1 className=' heading text-white font-bold text-2xl'>{news.attributes.headline}</h1>
                    <div className=" flex items-center justify-between w-full">
                        {time && <p className=' time text-white italic'>{time}</p>}
                        <p className=' src text-white '>Source {news.attributes.newsSource}</p>
                    </div>
                    <div className=" absolute bottom-3">
                        <h1 className=' text-teal-400 font-medium'>{news.attributes.hashtags}</h1>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Card