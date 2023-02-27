import React from "react";
import firstImage from './img/image 28 (1).png'
export default function Firstbox(params) {
   return(
      <div className="flex mt-10">
        <div>
            <img className="w-28" src={firstImage} alt="" />
        </div>
      </div>
   )  
}