import React from "react";
import headerPics from './img/Vector (4).png'
export default function Header(params) {
    return(
        <header className="bg-white  flex flex-row p-6 w-2/3 mx-auto shadow-xl rounded-lg shadow-gray-200">
            <img src={headerPics} className="" alt="" />
             
        </header>
    )
}