import React from "react";
import thirdimg from './img/image 27.png'
import thimg from './img/image 22.png'
export default function Thirdbox(params) {
    return(
        <div className="flex flex-col space-y-3 mt-20">
            <div>
          <img className="w-28" src={thirdimg} alt="" />
            </div>
            <div>
          <img className="w-28" src={thimg} alt="" />
            </div>
        </div>
    )
}