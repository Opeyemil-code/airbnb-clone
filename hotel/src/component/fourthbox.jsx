import React from "react";
import Fourthimg from './img/image 22.png'
import Fimg from './img/image 23.png'
export default function Fourthbox(params) {
    return(
        <div className="flex flex-col space-y-3 ">
            <div>
          <img className="w-28" src={Fourthimg} alt="" />
            </div>
            <div>
          <img className="w-28" src={Fimg} alt="" />
            </div>
        </div>
    )
}