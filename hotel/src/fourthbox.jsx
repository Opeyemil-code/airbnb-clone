import React from "react";
import Fourthimg from '/public/img/image 26.png'
import Fimg from '/public/img/image 28 (1).png'
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