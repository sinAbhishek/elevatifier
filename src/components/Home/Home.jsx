import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import "./home.css"
import Navbar from '../navbar/Navbar'
import { AiOutlineClose } from "react-icons/ai"
const Home = () => {
    const [show, setshow] = useState(false)
    const [type, settype] = useState("GLOBAL")
    const [data, setdata] = useState("")
    const categories = ["ENTERTAINMENT", "SPORTS", "GLOBAL", "TECHNOLOGY", "HEALTH"]
    useEffect(() => {
        const call = async () => {
            const res = await axios.get(`https://linesnews.onrender.com/api/news-datas?category=${type}`)
            setdata(res.data.data)
            console.log(res.data.data)
        }
        call()

    }, [type])

    const handleopen = () => {
        setshow(!show)
    }
    const handletype = (type) => {
        settype(type)
        console.log("hi")
    }
    const Category = ({ types }) => {
        return (
            <>
                <div onClick={() => handletype(types)} style={{ backgroundColor: type === types && "gray" }} className="  hover:bg-slate-800 my-2 flex ml-4 p-3">
                    <h1 className=' text-white'>{types}</h1>
                </div>

            </>
        )


    }
    return (
        <>
            <Navbar handleopen={handleopen} />
            <div className=' flex justify-center bg-slate-200'>
                <button className='absolute right-0 top-0' onClick={() => setshow(!show)}>show</button>
                <div className=" h-max w-full flex justify-center flex-col items-center">
                    {data && data.map((c) =>

                        <Card news={c} />

                    )}
                </div>
                <div className={show ? " cat w-56 bg-black fixed top-0 left-0 bottom-0 z-20" : " hide w-56 bg-black fixed top-0 left-0 bottom-0 z-20"}>
                    <div onClick={() => handleopen()} className=" absolute top-0 right-0 hover:cursor-pointer">
                        <AiOutlineClose color='white' size={"1.5rem"} />
                    </div>
                    <div className=" mt-10">
                        {categories.map((c) => <Category types={c} />)}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home