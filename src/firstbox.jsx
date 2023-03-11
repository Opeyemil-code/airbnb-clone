import React from "react";
import firstImage from '/public/img/image 25.png'
export default function Firstbox(params) {
   return(
      <div className="flex mt-10">
        <div>
            <img className="w-28" src={firstImage} alt="" />
        </div>
      </div>
   )  
}