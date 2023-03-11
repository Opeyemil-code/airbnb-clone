import React from "react";
import secondimage from '/public/img/image 23.png'
import thirdimage from '/public/img/image 24.png'
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
