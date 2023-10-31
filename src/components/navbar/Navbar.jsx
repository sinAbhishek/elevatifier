import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = ({ handleopen }) => {
    return (
        <div className=' w-screen h-20 bg-slate-900 flex items-center px-4 sticky top-0 z-10 '>
            <div onClick={() => handleopen()} className=" hover:cursor-pointer">
                <GiHamburgerMenu color='white' size={"1.5rem"} />
            </div>

        </div>
    )
}

export default Navbar