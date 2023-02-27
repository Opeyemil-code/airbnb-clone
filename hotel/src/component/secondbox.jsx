import React from "react";
import secondimage from './img/image 26.png'
import thirdimage from './img/image 29.png'
export default function Secondbox(params) {
   return(
      <div className="flex flex-col space-y-3">
        <div>
            <img className="w-28" src={secondimage} alt="" />
        </div>
        <div>
            <img className="w-28" src={thirdimage} alt="" />
        </div>
      </div>
   )  
}
