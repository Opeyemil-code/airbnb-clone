import React from "react";
import Fifthimg from '/public/img/image 29.png'
import Fifimg from '/public/img/image 29.png'
export default function Fifthbox(params) {
    return(
        <div className="flex flex-col space-y-3 mt-20">
            <div>
          <img className="w-28" src={Fifthimg} alt="" />
            </div>
            <div>
          <img className="w-28" src={Fifimg} alt="" />
            </div>
        </div>
    )
}